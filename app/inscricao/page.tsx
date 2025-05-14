"use client"

import { BaseSyntheticEvent, startTransition, useState } from 'react';
import Stepper, { Step } from '@/components/stepper';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { form, formSchema } from './_components/form-schema';
import { z } from 'zod';

export default function Inscricao() {
    const initialStep = 1
    const [currentStep, setCurrentStep] = useState(initialStep)
    const [teste2, setTeste2] = useState("")
    const [teste3, setTeste3] = useState("")
    const [done, setDone] = useState(false)

    function Finalizado() {
        return <div className="px-8">Finalizado</div>
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
                                                <Input placeholder="Nome" {...field} />
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
                                                <Input placeholder="CNPJ" {...field} />
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
                                                placeholder="CEP"
                                                {...field}
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
                        <h2>Step 3</h2>
                        <Input type='text' defaultValue={teste2} onChange={(event) => { setTeste2(event.target.value) }} required />
                    </Step>
                    <Step>
                        <h2>Step 4</h2>
                        <Input type='text' defaultValue={teste3} onChange={(event) => { setTeste3(event.target.value) }} required />
                    </Step>
                </Stepper>
            </form>
        </Form>
    </div>
}