// app/api/upload/route.ts
import { criarCadastro } from '@/services/cadastros';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const nome = formData.get('nome') as string;
        const email = formData.get('email') as string;
        const telefone = formData.get('telefone') as string;
        const cpf = formData.get('cpf') as string;
        const cnpj = formData.get('cnpj') as string;
        const carteira_tipo = formData.get('carteira_tipo') as "CAU" | "CREA";
        const carteira_numero = formData.get('carteira_numero') as string;
        const cep = formData.get('cep') as string;
        const logradouro = formData.get('logradouro') as string;
        const cidade = formData.get('cidade') as string;
        const uf = formData.get('uf') as string;
        const numero = formData.get('numero') as string | undefined;
        const complemento = formData.get('complemento') as string | undefined;
        const doc_especifica = formData.getAll('doc_especifica') as unknown as File[];
        const projetos = formData.getAll('projetos') as unknown as File[];

        const cadastro = await criarCadastro({ nome, email, telefone, cpf, cnpj, carteira_tipo, carteira_numero, cep, logradouro, cidade, uf, numero, complemento, doc_especifica, projetos });
        if (!cadastro) {
            return NextResponse.json({ message: 'Falha ao enviar cadastro' }, { status: 500 });
        }
        return NextResponse.json({ protocolo: cadastro }, { status: 201 });
    } catch (error: any) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ message: 'Falha ao enviar cadastro', error: error.message }, { status: 500 });
    }
}

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };
