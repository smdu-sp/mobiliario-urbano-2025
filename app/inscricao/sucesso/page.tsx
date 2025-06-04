/** @format */

import { MailCheck } from "lucide-react";
import Image from "next/image";
import backgroundSuccess from "../../../public/background-sucess-page.png";
import hero from "../../../public/hero-image.jpg";

export default function SucessoPage() {
    return (
        <>
            <div className="relative w-full h-[780px] flex flex-col items-center justify-center px-4 text-center">
                <Image
                    src={hero}
                    alt="background sucesso de inscrição"
                    className="object-cover absolute inset-0 w-full h-full"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-white max-w-4xl">
                    <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
                        Inscrição realizada com sucesso!
                    </h1>
                    <p className='intersect-once intersect:motion-preset-slide-up motion-delay-200 text-lg md:text-xl max-w-2xl mb-6'>
                        Os dados desta inscrição e informações sobre as próximas etapas do concurso serão enviadas para o e-mail informado no ato de inscrição
                    </p>
                </div>
            </div>

        </>
    );
}
