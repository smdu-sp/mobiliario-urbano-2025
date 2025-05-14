import { NextResponse } from "next/server"
import { create } from "./cadastro.dto"
import { criarCadastro } from "@/services/cadastros"

export async function POST(req: Request) {
    const data: create = await req.json()
    const protocolo = await criarCadastro(data);
    if (!protocolo) return NextResponse.json({
        status: 500,
        error: "Erro ao criar cadastro! Tente novamente."
    })
    return NextResponse.json({
        status: 200,
        protocolo
    })
}