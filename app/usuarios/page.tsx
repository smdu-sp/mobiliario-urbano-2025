/** @format */

import DataTable, { TableSkeleton } from '@/components/data-table';
import { Filtros } from '@/components/filtros';
import Pagination from '@/components/pagination';
import { auth } from '@/auth';
import * as usuario from '@/services/usuarios';
import { IPaginadoUsuario, IUsuario } from '@/types/usuario';
import { Suspense } from 'react';
import { columns } from './_components/columns';
import ModalUpdateAndCreate from './_components/modal-update-create';

export default async function UsuariosSuspense({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	return (
		<Suspense fallback={<TableSkeleton />}>
			<Usuarios searchParams={searchParams} />
		</Suspense>
	);
}

async function Usuarios({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	let { pagina = 1, limite = 10, total = 0 } = await searchParams;
	let ok = false;
	const { busca = '', status = '', permissao = '' } = await searchParams;
	let dados: IUsuario[] = [];

	const session = await auth();
	if (session && session.user) {
	}

	const statusSelect = [
		{
			label: 'Ativo',
			value: 'ATIVO',
		},
		{
			label: 'Inativo',
			value: 'INATIVO',
		},
	];

	const permissaoSelect = [
		{
			label: 'Desenvolvedor',
			value: 'DEV',
		},
		{
			label: 'Administrador',
			value: 'ADM',
		},
		{
			label: 'Técnico',
			value: 'TEC',
		},
		{
			label: 'Usuário',
			value: 'USR',
		},
	];

	return (
		<div className='  px-0 md:px-8 relative pb-20 md:pb-14 h-full container mx-auto '>
			<h1 className='text-xl md:text-4xl font-bold'>Usuários</h1>
			<div className='grid grid-cols-1  gap-y-3 my-5 '>
				<Filtros
					camposFiltraveis={[
						{
							nome: 'Busca',
							tag: 'busca',
							tipo: 0,
							placeholder: 'Digite o nome, email ou login',
						},
						{
							nome: 'Status',
							tag: 'status',
							tipo: 2,
							valores: statusSelect,
							default: 'ATIVO',
						},
						{
							nome: 'Permissão',
							tag: 'permissao',
							tipo: 2,
							valores: permissaoSelect,
						},
					]}
				/>
				<div className='w-full'>
					<DataTable
						columns={columns}
						data={dados || []}
					/>
				</div>

				{dados && dados.length > 0 && (
					<Pagination
						total={+total}
						pagina={+pagina}
						limite={+limite}
					/>
				)}
			</div>
			<div className='absolute bottom-10 md:bottom-5 right-2 md:right-8 hover:scale-110'>
				<ModalUpdateAndCreate isUpdating={false} />
			</div>
		</div>
	);
}
