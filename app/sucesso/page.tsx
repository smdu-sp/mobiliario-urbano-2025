/** @format */
import Image from 'next/image';
import arch from '../../public/Architect-rafiki.png';
import { cookies } from 'next/headers';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default async function SucessoPage() {
	const currentCookie = await cookies();
	const isCadastrado =
		currentCookie.get('cadastrado')?.value == 'true' ? true : false;

	if (isCadastrado) {
		return (
			<>
				<div className='relative w-full h-full flex flex-col-reverse lg:flex-row items-center min-h-screen justify-center px-4 text-center mb-2 gap-10 2xl:gap-20'>
					<div className='h-auto w-fit'>
						<Image
							src={arch}
							alt='background sucesso de inscrição'
							className='object-contain inset-0'
							priority
							quality={100}
							width={300}
							height={200}
						/>
					</div>
					<div className='h-auto w-fit mt-10 md:mt-0'>
						<h1 className='text-4xl text-primary md:text-5xl font-bold mb-4 capitalize'>
							Inscrição realizada com sucesso!
						</h1>
						<p className='intersect-once intersect:motion-preset-slide-up motion-delay-200 text-lg text-secondary-foreground md:text-xl max-w-2xl mb-6'>
							Os dados desta inscrição e informações sobre as próximas etapas do
							concurso serão enviadas para o e-mail informado no ato de
							inscrição
						</p>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<div className='relative w-full h-full flex flex-col-reverse lg:flex-row items-center min-h-screen justify-center px-4 text-center mb-2 gap-10 2xl:gap-20'>
				<div className='h-auto w-fit mt-10 md:mt-0 text-center flex flex-col justify-center items-center'>
					<h1 className='text-4xl text-primary md:text-5xl font-bold mb-4 capitalize'>
						Infelizmente seu cadastro não foi realizado
					</h1>
					<p className='intersect-once text-center intersect:motion-preset-slide-up motion-delay-200 text-lg text-secondary-foreground md:text-xl max-w-2xl mb-6'>
						Entre em contato com o suporte e tente novamente
					</p>
					<Link href={'/'}>
						<Button>
							Voltar ao início <ArrowUpRight />
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}
