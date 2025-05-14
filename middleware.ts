import authConfig from "@/auth/config"
import NextAuth from "next-auth"
import { privateRoutes } from "./routes"

const { auth } = NextAuth(authConfig)
export default auth(async (req) => {
    const isLoggedIn = !!req.auth
    const { nextUrl } = req
    const url = 'http://localhost:3000'
    const isPrivateRoute = privateRoutes.includes(nextUrl.pathname)
    const isAuthRoute = nextUrl.pathname.includes("/auth")
    const isApiRoute = nextUrl.pathname.includes("/api") && !nextUrl.pathname.includes("/api/auth")
    const isApiAuthRoute = nextUrl.pathname.includes("/api/auth") || nextUrl.pathname.includes("/api/ldap/bind")

    if (isApiAuthRoute) return
    if (!isLoggedIn && isAuthRoute) return
    if (isLoggedIn  && (isApiRoute || isPrivateRoute)) return
    if (isLoggedIn  && isAuthRoute) return Response.redirect(`${url}/`)
    if (!isLoggedIn && (isPrivateRoute || isApiRoute)) return Response.redirect(`${url}/auth/login`)
    return
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
}