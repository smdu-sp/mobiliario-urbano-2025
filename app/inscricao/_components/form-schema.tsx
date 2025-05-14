import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { BaseSyntheticEvent } from 'react';

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
    }),
    cep: z.string({
        required_error: "CEP é obrigatório!",
        invalid_type_error: "CEP é obrigatório!",
    }).min(2, "UF inválida!").max(2, "UF inválida!"),
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
    complemento: z.string().optional()
});

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
        complemento: ""
    },
});

export { formSchema, form };