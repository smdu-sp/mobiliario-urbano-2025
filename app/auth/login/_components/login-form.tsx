"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent } from "react"
import { signIn } from 'next-auth/react';
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Image from "next/image"

import logo from "@/public/logo.png"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter()
  
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget);
    const login = form.get("login");
    const senha = form.get("senha");
    try {
      const res = await signIn('credentials', {
        login: login as string,
        senha: senha as string,
        redirect: false,
      });
      if (res.error) toast.error("Credenciais incorretas!")
      else {
        toast.success("Seja bem-vindo!")
        router.push("/cadastros")
      } 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            <Image src={logo.src} alt="SPUrbanismo" width={602} height={200} className="w-60 mx-auto" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">                
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Login</Label>
                  <Input
                    id="login"
                    type="text"
                    name="login"
                    placeholder="Login"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="senha">Senha</Label>
                  </div>
                  <Input id="senha" type="password" name="senha" required />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
