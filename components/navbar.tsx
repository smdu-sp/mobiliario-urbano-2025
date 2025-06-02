/** @format */

import React from 'react';
import { ToggleTheme } from '@/components/toggle-theme';
import Link from 'next/link';
import Image from 'next/image';
import escudo from '../public/escudo.png';
import { auth } from '@/auth';
import Sair from '@/app/_components/Sair';

export default async function Navbar() {
	const session = await auth();
	return (
		<header className='bg-primary text-white'>
			<div className='container mx-auto px-4 py-3 flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Image
						src={escudo}
						alt='Brasão da Prefeitura de São Paulo'
						width={40}
						height={40}
						className='bg-white rounded-full p-1'
					/>
					<span className='font-semibold text-sm md:text-base'>
						Prefeitura de São Paulo
					</span>
				</div>
				<nav className='hidden md:flex gap-6'>
					<Link
						href='/'
						className='text-sm hover:underline'>
						Início
					</Link>
					<Link
						href='#'
						className='text-sm hover:underline'>
						Serviços
					</Link>
					<Link
						href='#'
						className='text-sm hover:underline'>
						Notícias
					</Link>
					<Link
						href='#'
						className='text-sm hover:underline'>
						Contato
					</Link>
				</nav>
				{/* <Button
							variant='outline'
							size='sm'
							className='border-white text-white hover:bg-white hover:text-[#0066CC]'>
							Acessibilidade
						</Button> */}
				<div className='flex items-center gap-5'>
					<ToggleTheme />
					{session?.user?.nome}
					<Sair session={session} />
				</div>
			</div>
		</header>
	);
}
