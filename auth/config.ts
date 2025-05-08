import Credentials from "next-auth/providers/credentials"
import { db } from "../lib/prisma"

export default {
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                login: {},
                senha: {},
            },
            authorize: async (credentials) => {
                const date = new Date()
                let user = null
                const { login, senha } = credentials
                if (!login || !senha) return null
                user = await db.usuario.findUnique({ where: { login: login as string }})
                if (!user) {
                    user = await db.usuario.create({
                       data: {
                        nome: "Victor Alexander Menezes de Abreu",
                        login: "d927014",
                        email:  "vmabreu@prefeitura.sp.gov.br",
                        permissao: "DEV"
                       }
                    })
                }
                if (date < new Date("2025-06-02") && user.permissao !== "DEV") return null
                return {
                    id: user.id,
                    email: user.email,
                    nome: user.nome,
                    login: user.login,
                    permissao: user.permissao,
                }
            },
        }),
    ],
    callbacks: {
        // @eslint-disable-next-line
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id
                token.email = user.email
                token.nome = user.nome
                token.login = user.login
                token.permissao = user.permissao
            }
            return token
        },
        // @eslint-disable-next-line
        async session({ session, token }: any) {
            session.user.id = token.id
            session.user.email = token.email
            session.user.nome = token.nome
            session.user.login = token.login
            session.user.permissao = token.permissao
            return session
        }
    },
    pages: {
        signIn: "/auth/login",
        error: "/auth/login"
    },
    trustHost: true
}