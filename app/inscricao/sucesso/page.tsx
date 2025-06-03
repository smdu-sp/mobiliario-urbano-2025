/** @format */

import { MailCheck } from "lucide-react";
import Image from "next/image";
import backgroundSuccess from "../../../public/background-sucess-page.png";

export default function SucessoPage() {
    return (
        <>
            <div className="relative w-full h-[780px] flex flex-col items-center justify-center px-4 text-center">
                <Image
                    src={backgroundSuccess}
                    alt="background sucesso de inscrição"
                    className="object-cover absolute inset-0 w-full h-full"
                    priority
                    quality={100}
                />
                {/* Overlay escura pra dar contraste no texto */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Conteúdo em cima da imagem */}
                <div className="relative z-10 text-white max-w-4xl">
                    <h1 className="text-4xl text-primary dark:text-white md:text-5xl font-bold mb-4">
                        Inscrição realizada com sucesso!
                    </h1>
                    <p className="text-lg max-w-xl mx-auto flex items-center justify-center gap-2">
                        Os dados desta inscrição e informações sobre as próximas etapas do concurso serão enviadas para o e-mail informado no ato de inscrição
                    </p>
                </div>

                <div>


                </div>
            </div>

        </>
    );
}
