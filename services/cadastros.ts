import { create as CreteCadastro } from "@/app/api/cadastro/cadastro.dto";
import { db } from "@/lib/prisma";

function geraProtocolo(id: number) {
    const mascara = 17529 * (id ** 2) + 85474;
    const chave1 = 7458321;
    const chave2 = 13874219;
    const protocolo = ((mascara + chave1) ^ chave2).toString();
    return `MOB-2025-${protocolo.padStart(10, '0')}`;
}

async function criarCadastro(data: CreteCadastro): Promise<string | null> {
    const protocolo = await db.$transaction(async (tx) => {
        const novo_cadastro = await tx.cadastro.create({ data })
        const protocolo = geraProtocolo(+novo_cadastro.id)
        await tx.cadastro.update({ where: { id: novo_cadastro.id }, data: { protocolo } })
        return protocolo
    })
    if (!protocolo) return null
    return protocolo
}

export {
    criarCadastro,
    geraProtocolo
}