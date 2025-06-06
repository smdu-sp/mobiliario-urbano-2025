/** @format */

import Image from "next/image";
import backgroundSuccess from "../../../public/background-sucess-page.png";
import hero from "../../../public/hero-image.jpg";
import arch from "../../../public/Architect-rafiki.png";

export default function SucessoPage() {
  return (
    <>
      <div className="relative w-full h-full flex flex-row items-center min-h-screen justify-around px-4 text-center mb-2">
        <div className="h-auto">
          <Image
            src={arch}
            alt="background sucesso de inscrição"
            className="object-cover inset-0"
            priority
            quality={100}
            width={400}
            height={500}
          />
        </div>
        <div className="h-auto">
          <h1 className="text-4xl text-primary md:text-5xl font-bold mb-4">
            Inscrição realizada com sucesso!
          </h1>
          <p className="intersect-once intersect:motion-preset-slide-up motion-delay-200 text-lg text-secondary-foreground md:text-xl max-w-2xl mb-6">
            Os dados desta inscrição e informações sobre as próximas etapas do
            concurso serão enviadas para o e-mail informado no ato de inscrição
          </p>
        </div>
      </div>
    </>
  );
}
