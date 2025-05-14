import Credentials from "next-auth/providers/credentials"
import { bind } from "../services/ldap"

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
                const { login, senha } = credentials
                if (!login || !senha) return null
                const resposta = await fetch(`${process.env.API_BASE}/api/ldap/bind`, {
                    method: "POST",
                    body: JSON.stringify({
                        login: login as string,
                        senha: senha as string
                    })
                })
                if (resposta.status !== 200) return null
                const { usuario } = await resposta.json()
                if (!usuario) return null
                if (date < new Date("2025-06-02") && usuario.permissao !== "DEV") return null
                return {
                    id: usuario.id,
                    email: usuario.email,
                    nome: usuario.nome,
                    login: usuario.login,
                    permissao: usuario.permissao,
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