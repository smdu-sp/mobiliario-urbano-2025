"use client"

import { BaseSyntheticEvent, startTransition, useState } from 'react';
import Stepper, { Step } from '@/components/stepper';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DragDropInput from '@/components/drag-drop-input';
import { formatarCEP, formatarCNPJ, formatarCPF, formatarTelefone, formataUF } from '@/lib/utils';
import { ViaCepResposta } from '../api/buscar-cep/[cep]/cep.dto';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@radix-ui/react-context-menu';

const formSchema = z.object({
    nome: z.string({
        required_error: "Nome é obrigatório!",
        invalid_type_error: "Nome é obrigatório!",
    }),
    email: z.string({
        required_error: "E-mail é obrigatório!",
        invalid_type_error: "E-mail é obrigatório!",
    }).email({
        message: "E-mail inválido!"
    }),
    cnpj: z.string({
        required_error: "CNPJ é obrigatório!",
        invalid_type_error: "CNPJ é obrigatório!",
    }).min(18, "CNPJ inválido!").max(18, "CNPJ inválido!"),
    cpf: z.string({
        required_error: "CPF é obrigatório!",
        invalid_type_error: "CPF é obrigatório!",
    }).min(14, "CPF inválido!").max(14, "CPF inválido!"),
    telefone: z.string({
        required_error: "Telefone é obrigatório!",
        invalid_type_error: "Telefone é obrigatório!",
    }).min(14, "Telefone inválido!").max(15, "Telefone inválido!"),
    carteira_tipo: z.enum(["CAU", "CREA"], {
        required_error: "Tipo de carteira é obrigatório!",
        invalid_type_error: "Tipo de carteira é obrigatório!",
    }),
    carteira_numero: z.string({
        required_error: "Número de carteira é obrigatório!",
        invalid_type_error: "Número de carteira é obrigatório!",
    }),
    cep: z.string({
        required_error: "CEP é obrigatório!",
        invalid_type_error: "CEP é obrigatório!",
    }).min(9, "CEP inválido!").max(9, "CEP inválido!"),
    uf: z.string({
        required_error: "UF é obrigatório!",
        invalid_type_error: "UF é obrigatório!",
    }).min(2, "UF inválida!").max(2, "UF inválida!"),
    cidade: z.string({
        required_error: "Cidade é obrigatório!",
        invalid_type_error: "Cidade é obrigatório!",
    }),
    logradouro: z.string({
        required_error: "Logradouro é obrigatório!",
        invalid_type_error: "Logradouro é obrigatório!",
    }),
    numero: z.string().optional(),
    complemento: z.string().optional(),
    doc_especifica: z
        .array(z.instanceof(File))
        .min(1, { message: "Pelo menos um arquivo é necessário" })
        .refine(
            (files) => {
                const totalSize = files.reduce((sum, file) => sum + file.size, 0)
                return totalSize <= 20 * 1024 * 1024
            },
            {
                message: "O tamanho total dos arquivos não pode exceder 20MB",
            },
        ),
    projetos: z
        .array(z.instanceof(File))
        .min(1, { message: "Pelo menos um arquivo é necessário" })
        .refine(
            (files) => {
                const totalSize = files.reduce((sum, file) => sum + file.size, 0)
                return totalSize <= 130 * 1024 * 1024
            },
            {
                message: "O tamanho total dos arquivos não pode exceder 130MB",
            },
        ),
});

export default function Inscricao() {
    const initialStep = 1
    const [currentStep, setCurrentStep] = useState(initialStep)
    const [done, setDone] = useState(false)

    function Finalizado() {
        return <div className="grid grid-cols-2 gap-2 px-10">
            <div>
                <p><span className="font-bold">Nome:</span> {form.getValues("nome")}</p>
                <p><span className="font-bold">E-mail:</span> {form.getValues("email")}</p>
                <p><span className="font-bold">CNPJ:</span> {form.getValues("cnpj")}</p>
                <p><span className="font-bold">CPF:</span> {form.getValues("cpf")}</p>
                <p><span className="font-bold">Telefone:</span> {form.getValues("telefone")}</p>
                <p><span className="font-bold">Carteira de ordem:</span> {form.getValues("carteira_tipo")} - {form.getValues("carteira_numero")}</p>
            </div>
            <div>
                <p><span className="font-bold">CEP:</span> {form.getValues("cep")}</p>
                <p><span className="font-bold">UF:</span> {form.getValues("uf")}</p>
                <p><span className="font-bold">Cidade:</span> {form.getValues("cidade")}</p>
                <p><span className="font-bold">Logradouro:</span> {form.getValues("logradouro")}</p>
                <p><span className="font-bold">Numero:</span> {form.getValues("numero")}</p>
                <p><span className="font-bold">Complemento:</span> {form.getValues("complemento")}</p>
            </div>
            <div className="col-span-2">
                <p><span className="font-bold">Documentos:</span> {form.getValues("doc_especifica").length} arquivo(s)</p>
                <p><span className="font-bold">Projetos:</span> {form.getValues("projetos").length} arquivo(s)</p>
            </div>
        </div>
    }

    function Submit() {
        return <Button disabled={form.formState.isSubmitting} type="submit">Enviar dados</Button>
    }

    function handleSubmit(data: z.infer<typeof formSchema>, event?: BaseSyntheticEvent<object, any, any> | undefined) {
        event?.preventDefault()
        startTransition(() => {
            console.log(data)
        })
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            email: "",
            cnpj: "",
            cep: "",
            uf: "",
            cidade: "",
            logradouro: "",
            numero: "",
            complemento: "",
            doc_especifica: [],
            projetos: [],
        },
    });

    async function buscaCEP(cep: string) {
        cep = cep.replace(/\D/g, '').trim().substring(0, 8);
        if (cep.length === 8) {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data: ViaCepResposta = await response.json()
            form.setValue("uf", data.uf ? data.uf : '');
            form.setValue("cidade", data.localidade ? data.localidade : '');
            form.setValue("logradouro", data.logradouro ? data.logradouro : '');
        }
    }

    return <div className="max-w-3xl mx-auto">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <Stepper
                    initialStep={initialStep}
                    onStepChange={(step: number) => {
                        setCurrentStep(step);
                        setDone(false);
                    }}
                    onFinalStepCompleted={() => setDone(true)}
                    backButtonText="Voltar"
                    nextButtonText="Próximo"
                    completeButtonText="Finalizar"
                    disableStepIndicators={true}
                    stepCircleContainerClassName="w-full"
                    contentClassName="my-6"
                    final={<Finalizado />}
                    submitButton={<Submit />}
                >
                    <Step>
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-4 gap-6">
                                {/* <span className="text-2xl col-span-4">Dados da Empresa</span> */}
                                <FormField
                                    control={form.control}
                                    name="nome"
                                    render={({ field }) => (
                                        <FormItem className="col-span-4 gap-3 relative">
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Nome do responsável pelo projeto" {...field} />
                                            </FormControl>
                                            <FormMessage className="absolute bottom-0" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cpf"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 gap-3 relative">
                                            <FormLabel>CPF</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="000.000.000-00" 
                                                    {...field}
                                                    value={formatarCPF(field.value)}
                                                />
                                            </FormControl>
                                            <FormMessage className="absolute bottom-0" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cnpj"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 gap-3 relative">
                                            <FormLabel>CNPJ</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="00.000.0000/0000-00" 
                                                    {...field}
                                                    value={formatarCNPJ(field.value)}
                                                />
                                            </FormControl>
                                            <FormMessage className="absolute bottom-0" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 gap-3 relative">
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormMessage className="absolute bottom-0" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="telefone"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 gap-3 relative">
                                            <FormLabel>Telefone</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="(00) 90000-0000" 
                                                    {...field}
                                                    value={formatarTelefone(field.value)}
                                                />
                                            </FormControl>
                                            <FormMessage className="absolute bottom-0" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="carteira_tipo"
                                    render={({ field }) => (
                                        <FormItem className="col-span-1 gap-3 relative">
                                            <FormLabel>CAU/CREA</FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Selecione o tipo" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Tipo</SelectLabel>
                                                            <SelectItem value="CAU">CAU</SelectItem>
                                                            <SelectItem value="CREA">CREA</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage className="absolute bottom-0" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="carteira_numero"
                                    render={({ field }) => (
                                        <FormItem className="col-span-3 gap-3 relative">
                                            <FormLabel>Número de identificação</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage className="absolute bottom-0" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </Step>
                    <Step>
                        <div className="grid grid-cols-4 gap-6">
                            {/* <span className="text-2xl col-span-4">Endereço</span> */}
                            <FormField
                                control={form.control}
                                name="cep"
                                render={({ field }) => (
                                    <FormItem className='col-span-4 gap-3 relative'>
                                        <FormLabel>CEP</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="00000-000"
                                                {...field}
                                                value={formatarCEP(field.value)}
                                                onBlur={(e) => buscaCEP(e.target.value)}
                                                onChange={(e) => {
                                                    field.onChange(e)
                                                    form.setValue('logradouro', '')
                                                    form.setValue('cidade', '')
                                                    form.setValue('uf', '')
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage className="bottom-0" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="uf"
                                render={({ field }) => (
                                    <FormItem className="col-span-1 gap-3 relative">
                                        <FormLabel>Estado</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Estado"
                                                {...field}
                                                value={formataUF(field.value)}
                                                readOnly
                                            />
                                        </FormControl>
                                        <FormMessage className="absolute bottom-0" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="cidade"
                                render={({ field }) => (
                                    <FormItem className="col-span-3 gap-3 relative">
                                        <FormLabel>Cidade</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Cidade"
                                                {...field} 
                                                readOnly
                                            />
                                        </FormControl>
                                        <FormMessage className="absolute bottom-0" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="logradouro"
                                render={({ field }) => (
                                    <FormItem className="col-span-3 gap-3 relative">
                                        <FormLabel>Logradouro</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Logradouro"
                                                {...field} 
                                                readOnly
                                            />
                                        </FormControl>
                                        <FormMessage className="absolute bottom-0" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="numero"
                                render={({ field }) => (
                                    <FormItem className="col-span-1 gap-3 relative">
                                        <FormLabel>Número</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Número"
                                                {...field} 
                                            />
                                        </FormControl>
                                        <FormMessage className="absolute bottom-0" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="complemento"
                                render={({ field }) => (
                                    <FormItem className="col-span-4 gap-3 relative">
                                        <FormLabel>Complemento</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Complemento"
                                                {...field} 
                                            />
                                        </FormControl>
                                        <FormMessage className="absolute bottom-0" />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </Step>
                    <Step>
                        <FormField
                            control={form.control}
                            name="doc_especifica"
                            render={({ field }) => (
                                <FormItem className="col-span-4 gap-3">
                                    <div className="leading-none font-semibold">Documentação</div>
                                    <FormControl>
                                        <DragDropInput
                                            { ...field }
                                            multiple={true}
                                            maxSize={20 * 1024 * 1024}
                                            accept="image/*,.pdf,.doc,.docx"
                                            helperText="Máximo 20MB total."
                                            error={form.formState.errors.doc_especifica?.message}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </Step>
                    <Step>
                        <FormField
                            control={form.control}
                            name="projetos"
                            render={({ field }) => (
                                <FormItem className="col-span-4 gap-3">
                                    <div className="leading-none font-semibold">Projetos</div>
                                    <FormControl>
                                        <DragDropInput
                                            { ...field }
                                            multiple={true}
                                            maxSize={130 * 1024 * 1024}
                                            accept="image/*,.pdf,.doc,.docx"
                                            helperText="Máximo 130MB total."
                                            error={form.formState.errors.projetos?.message}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </Step>
                </Stepper>
            </form>
        </Form>
    </div>
}