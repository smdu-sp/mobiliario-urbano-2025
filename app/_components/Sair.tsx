"use client"

import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Sair({ session }: { session: Session | null }) {
    const router = useRouter();
    return session ? <Button variant="default" onClick={async () => await signOut()}>Sair</Button> : <Button onClick={() => router.push("/auth/login")}>Login</Button>
}