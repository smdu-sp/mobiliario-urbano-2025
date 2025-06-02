/** @format */

import { auth } from '@/auth';
import Sair from './_components/Sair';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import {
	Calendar,
	Clock,
	HelpCircle,
	Info,
	MapPin,
	Phone,
	Ticket,
} from 'lucide-react';
import Image from 'next/image';
import escudo from '../public/escudo.png';

export default async function Home() {
	const session = await auth();
	return (
		<div className='grid w-full'>
			<div className='flex min-h-screen flex-col'>
				{/* Header com logo da prefeitura */}
				<header className='bg-[#0066CC] text-white'>
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
								href='#'
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
						<Button
							variant='outline'
							size='sm'
							className='border-white text-white hover:bg-white hover:text-[#0066CC]'>
							Acessibilidade
						</Button>
					</div>
				</header>

				{/* Banner do evento */}
				<div className='relative h-[300px] md:h-[400px] lg:h-[500px] w-full'>
					<Image
						src='/placeholder.svg?height=500&width=1200'
						alt='Imagem do evento'
						fill
						className='object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4'>
						<span className='bg-[#0066CC] px-3 py-1 rounded-full text-sm font-medium mb-4'>
							15 a 20 de Agosto de 2025
						</span>
						<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl'>
							Festival Cultural de São Paulo
						</h1>
						<p className='text-lg md:text-xl max-w-2xl mb-6'>
							Celebrando a diversidade cultural da maior cidade do Brasil
						</p>
						<Button className='bg-[#0066CC] hover:bg-[#0055AA]'>
							Inscreva-se Agora
						</Button>
					</div>
				</div>

				{/* Conteúdo principal com acordeões */}
				<main className='container mx-auto px-4 py-12'>
					<div className='max-w-3xl mx-auto'>
						<h2 className='text-2xl md:text-3xl font-bold text-center mb-8 text-[#0066CC]'>
							Informações do Evento
						</h2>

						<Accordion
							type='single'
							collapsible
							className='w-full space-y-4'>
							<AccordionItem
								value='item-1'
								className='border rounded-lg px-4'>
								<AccordionTrigger className='py-4 flex gap-3 items-center'>
									<Info className='h-5 w-5 text-[#0066CC] flex-shrink-0' />
									<span className='font-medium'>Sobre o Evento</span>
								</AccordionTrigger>
								<AccordionContent className='pb-4 pt-1 px-9'>
									<p className='text-gray-700 dark:text-gray-300'>
										O Festival Cultural de São Paulo é um evento anual
										organizado pela Prefeitura Municipal que celebra a rica
										diversidade cultural da cidade. Com apresentações
										artísticas, exposições, workshops e gastronomia, o festival
										reúne o melhor da cultura paulistana em um só lugar.
									</p>
									<p className='text-gray-700 dark:text-gray-300 mt-3'>
										Em sua 10ª edição, o festival deste ano terá como tema
										&rdquo;São Paulo: Encontro de Culturas&rdquo;, destacando a
										influência das diversas comunidades que formam a identidade
										da cidade.
									</p>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value='item-2'
								className='border rounded-lg px-4'>
								<AccordionTrigger className='py-4 flex gap-3 items-center'>
									<Calendar className='h-5 w-5 text-[#0066CC] flex-shrink-0' />
									<span className='font-medium'>Data e Horário</span>
								</AccordionTrigger>
								<AccordionContent className='pb-4 pt-1 px-9'>
									<div className='space-y-3'>
										<p className='text-gray-700 dark:text-gray-300'>
											<strong>Período:</strong> 15 a 20 de Agosto de 2025
										</p>
										<p className='text-gray-700 dark:text-gray-300'>
											<strong>Horários:</strong>
										</p>
										<ul className='list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1'>
											<li>Segunda a Sexta: das 10h às 22h</li>
											<li>Sábado e Domingo: das 9h às 23h</li>
										</ul>
										<p className='text-gray-700 dark:text-gray-300 mt-2'>
											<strong>Cerimônia de Abertura:</strong> 15 de Agosto às
											19h
										</p>
										<p className='text-gray-700 dark:text-gray-300'>
											<strong>Encerramento:</strong> 20 de Agosto às 21h com
											show especial
										</p>
									</div>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value='item-3'
								className='border rounded-lg px-4'>
								<AccordionTrigger className='py-4 flex gap-3 items-center'>
									<MapPin className='h-5 w-5 text-[#0066CC] flex-shrink-0' />
									<span className='font-medium'>Local</span>
								</AccordionTrigger>
								<AccordionContent className='pb-4 pt-1 px-9'>
									<div className='space-y-3'>
										<p className='text-gray-700 dark:text-gray-300'>
											<strong>Parque Ibirapuera</strong>
										</p>
										<p className='text-gray-700 dark:text-gray-300'>
											Av. Pedro Álvares Cabral - Vila Mariana, São Paulo - SP,
											04094-050
										</p>
										<p className='text-gray-700 dark:text-gray-300'>
											O evento acontecerá em diversas áreas do parque,
											incluindo:
										</p>
										<ul className='list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1'>
											<li>Pavilhão da Bienal</li>
											<li>Auditório Ibirapuera</li>
											<li>Marquise</li>
											<li>
												Arena ao ar livre (montada especialmente para o evento)
											</li>
										</ul>
										<div className='mt-4 h-[200px] w-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center'>
											<span className='text-gray-500 dark:text-gray-400'>
												Mapa do local
											</span>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value='item-4'
								className='border rounded-lg px-4'>
								<AccordionTrigger className='py-4 flex gap-3 items-center'>
									<Clock className='h-5 w-5 text-[#0066CC] flex-shrink-0' />
									<span className='font-medium'>Programação</span>
								</AccordionTrigger>
								<AccordionContent className='pb-4 pt-1 px-9'>
									<div className='space-y-4'>
										<div>
											<h4 className='font-semibold text-[#0066CC]'>
												15 de Agosto (Abertura)
											</h4>
											<ul className='mt-2 space-y-2'>
												<li className='flex gap-2'>
													<span className='text-sm font-medium w-16'>
														10:00
													</span>
													<span className='text-gray-700 dark:text-gray-300'>
														Abertura dos portões e exposições
													</span>
												</li>
												<li className='flex gap-2'>
													<span className='text-sm font-medium w-16'>
														14:00
													</span>
													<span className='text-gray-700 dark:text-gray-300'>
														Workshop de arte urbana
													</span>
												</li>
												<li className='flex gap-2'>
													<span className='text-sm font-medium w-16'>
														19:00
													</span>
													<span className='text-gray-700 dark:text-gray-300'>
														Cerimônia oficial de abertura
													</span>
												</li>
												<li className='flex gap-2'>
													<span className='text-sm font-medium w-16'>
														20:30
													</span>
													<span className='text-gray-700 dark:text-gray-300'>
														Show de música com artistas locais
													</span>
												</li>
											</ul>
										</div>

										<div>
											<h4 className='font-semibold text-[#0066CC]'>
												16 de Agosto
											</h4>
											<ul className='mt-2 space-y-2'>
												<li className='flex gap-2'>
													<span className='text-sm font-medium w-16'>
														10:00
													</span>
													<span className='text-gray-700 dark:text-gray-300'>
														Feira de artesanato
													</span>
												</li>
												<li className='flex gap-2'>
													<span className='text-sm font-medium w-16'>
														13:00
													</span>
													<span className='text-gray-700 dark:text-gray-300'>
														Apresentações de dança folclórica
													</span>
												</li>
												<li className='flex gap-2'>
													<span className='text-sm font-medium w-16'>
														16:00
													</span>
													<span className='text-gray-700 dark:text-gray-300'>
														Painel: &quot;A História Cultural de São Paulo&quot;
													</span>
												</li>
												<li className='flex gap-2'>
													<span className='text-sm font-medium w-16'>
														20:00
													</span>
													<span className='text-gray-700 dark:text-gray-300'>
														Apresentação teatral
													</span>
												</li>
											</ul>
										</div>

										<p className='text-sm text-gray-500 dark:text-gray-400 italic'>
											* A programação completa dos demais dias está disponível
											no site oficial do evento e no aplicativo da Prefeitura.
										</p>

										<Button
											variant='outline'
											className='mt-2 text-[#0066CC] border-[#0066CC]'>
											Ver programação completa
										</Button>
									</div>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value='item-5'
								className='border rounded-lg px-4'>
								<AccordionTrigger className='py-4 flex gap-3 items-center'>
									<Ticket className='h-5 w-5 text-[#0066CC] flex-shrink-0' />
									<span className='font-medium'>Inscrições e Ingressos</span>
								</AccordionTrigger>
								<AccordionContent className='pb-4 pt-1 px-9'>
									<div className='space-y-3'>
										<p className='text-gray-700 dark:text-gray-300'>
											A entrada no evento é <strong>gratuita</strong>, mas para
											algumas atividades específicas é necessário fazer
											inscrição prévia devido à capacidade limitada.
										</p>

										<div className='mt-4'>
											<h4 className='font-semibold'>
												Atividades que requerem inscrição:
											</h4>
											<ul className='list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mt-2'>
												<li>Workshops e oficinas</li>
												<li>Palestras e debates</li>
												<li>Visitas guiadas</li>
												<li>Shows especiais no Auditório Ibirapuera</li>
											</ul>
										</div>

										<div className='mt-4'>
											<h4 className='font-semibold'>Como se inscrever:</h4>
											<ul className='list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mt-2'>
												<li>
													Pelo site:{' '}
													<span className='text-[#0066CC]'>
														www.festivalsaopaulo.sp.gov.br
													</span>
												</li>
												<li>Pelo aplicativo da Prefeitura de São Paulo</li>
												<li>
													Presencialmente nos Centros Culturais da cidade (a
													partir de 15/07/2025)
												</li>
											</ul>
										</div>

										<div className='bg-blue-50 dark:bg-blue-900/30 p-3 rounded-md mt-4'>
											<p className='text-sm text-gray-700 dark:text-gray-300'>
												<strong>Importante:</strong> As inscrições para as
												atividades abrem no dia 01/08/2025 às 12h. Recomendamos
												que se inscreva com antecedência, pois as vagas são
												limitadas.
											</p>
										</div>

										<Button className='mt-4 bg-[#0066CC] hover:bg-[#0055AA]'>
											Fazer inscrição
										</Button>
									</div>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value='item-6'
								className='border rounded-lg px-4'>
								<AccordionTrigger className='py-4 flex gap-3 items-center'>
									<MapPin className='h-5 w-5 text-[#0066CC] flex-shrink-0' />
									<span className='font-medium'>Como Chegar</span>
								</AccordionTrigger>
								<AccordionContent className='pb-4 pt-1 px-9'>
									<div className='space-y-4'>
										<div>
											<h4 className='font-semibold'>Transporte Público:</h4>
											<ul className='mt-2 space-y-2 text-gray-700 dark:text-gray-300'>
												<li className='flex items-start gap-2'>
													<div className='min-w-5 mt-1'>🚇</div>
													<div>
														<strong>Metrô:</strong> Estação AACD-Servidor (Linha
														5-Lilás) - 10 minutos a pé até o portão 3
													</div>
												</li>
												<li className='flex items-start gap-2'>
													<div className='min-w-5 mt-1'>🚌</div>
													<div>
														<strong>Ônibus:</strong> Diversas linhas param nos
														arredores do parque. Consulte as linhas no site da
														SPTrans
													</div>
												</li>
											</ul>
										</div>

										<div>
											<h4 className='font-semibold'>De Carro:</h4>
											<p className='mt-2 text-gray-700 dark:text-gray-300'>
												Estacionamento disponível no parque com taxa (sujeito à
												lotação). Recomendamos o uso de transporte público ou
												aplicativos de transporte.
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>Bicicleta:</h4>
											<p className='mt-2 text-gray-700 dark:text-gray-300'>
												Bicicletários disponíveis em todos os portões do parque.
												Haverá também estações de bicicletas compartilhadas nas
												proximidades.
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>Portões de Acesso:</h4>
											<ul className='list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mt-2'>
												<li>Portão 2 (Av. Pedro Álvares Cabral) - Principal</li>
												<li>Portão 3 (Av. República do Líbano)</li>
												<li>Portão 10 (Av. IV Centenário)</li>
											</ul>
										</div>

										<div className='bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-md'>
											<p className='text-sm text-gray-700 dark:text-gray-300'>
												<strong>Dica:</strong> Para evitar filas, chegue com
												antecedência e utilize os portões 3 ou 10, que costumam
												ter menor movimento.
											</p>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value='item-7'
								className='border rounded-lg px-4'>
								<AccordionTrigger className='py-4 flex gap-3 items-center'>
									<Phone className='h-5 w-5 text-[#0066CC] flex-shrink-0' />
									<span className='font-medium'>Contato</span>
								</AccordionTrigger>
								<AccordionContent className='pb-4 pt-1 px-9'>
									<div className='space-y-4'>
										<div>
											<h4 className='font-semibold'>Central de Atendimento:</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												<strong>Telefone:</strong> (11) 3333-4444
											</p>
											<p className='text-gray-700 dark:text-gray-300'>
												<strong>Horário:</strong> Segunda a sexta, das 8h às 18h
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>E-mail:</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												festival@prefeitura.sp.gov.br
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>Redes Sociais:</h4>
											<div className='flex gap-3 mt-2'>
												<Button
													variant='outline'
													size='sm'
													className='rounded-full h-10 w-10 p-0'>
													<span className='sr-only'>Instagram</span>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='20'
														height='20'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
														className='text-[#0066CC]'>
														<rect
															width='20'
															height='20'
															x='2'
															y='2'
															rx='5'
															ry='5'
														/>
														<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
														<line
															x1='17.5'
															x2='17.51'
															y1='6.5'
															y2='6.5'
														/>
													</svg>
												</Button>
												<Button
													variant='outline'
													size='sm'
													className='rounded-full h-10 w-10 p-0'>
													<span className='sr-only'>Facebook</span>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='20'
														height='20'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
														className='text-[#0066CC]'>
														<path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
													</svg>
												</Button>
												<Button
													variant='outline'
													size='sm'
													className='rounded-full h-10 w-10 p-0'>
													<span className='sr-only'>Twitter</span>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='20'
														height='20'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
														className='text-[#0066CC]'>
														<path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
													</svg>
												</Button>
												<Button
													variant='outline'
													size='sm'
													className='rounded-full h-10 w-10 p-0'>
													<span className='sr-only'>YouTube</span>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='20'
														height='20'
														viewBox='0 0 24 24'
														fill='none'
														stroke='currentColor'
														strokeWidth='2'
														strokeLinecap='round'
														strokeLinejoin='round'
														className='text-[#0066CC]'>
														<path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' />
														<path d='m10 15 5-3-5-3z' />
													</svg>
												</Button>
											</div>
										</div>

										<div>
											<h4 className='font-semibold'>Durante o evento:</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												Postos de informação estarão disponíveis em todos os
												portões e áreas principais do evento.
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>Imprensa:</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												Para credenciamento de imprensa, entre em contato pelo
												e-mail: imprensa.festival@prefeitura.sp.gov.br
											</p>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value='item-8'
								className='border rounded-lg px-4'>
								<AccordionTrigger className='py-4 flex gap-3 items-center'>
									<HelpCircle className='h-5 w-5 text-[#0066CC] flex-shrink-0' />
									<span className='font-medium'>Perguntas Frequentes</span>
								</AccordionTrigger>
								<AccordionContent className='pb-4 pt-1 px-9'>
									<div className='space-y-4'>
										<div>
											<h4 className='font-semibold'>O evento é gratuito?</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												Sim, a entrada no evento é gratuita. Algumas atividades
												específicas podem requerer inscrição prévia devido à
												capacidade limitada.
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>Posso levar crianças?</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												Sim! O evento é para todas as idades e conta com
												programação específica para crianças. Menores de 12 anos
												devem estar acompanhados por um responsável.
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>
												É permitido levar comida e bebida?
											</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												É permitido levar água e lanches leves. O evento contará
												com praça de alimentação com diversas opções
												gastronômicas.
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>
												Haverá acessibilidade para pessoas com deficiência?
											</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												Sim, todas as áreas do evento contam com acessibilidade.
												Haverá intérpretes de Libras nas principais
												apresentações e material em Braille disponível nos
												postos de informação.
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>
												Posso levar animais de estimação?
											</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												Animais de estimação são permitidos, desde que estejam
												com coleira e sob responsabilidade do dono. Cães-guia
												têm acesso garantido a todas as áreas.
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>
												O que não é permitido levar?
											</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												Não é permitido levar objetos cortantes, garrafas de
												vidro, bebidas alcoólicas, drones ou equipamentos
												profissionais de fotografia (sem credenciamento).
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>
												Em caso de chuva, o evento será cancelado?
											</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												Não. As atividades ao ar livre podem ser remanejadas
												para áreas cobertas ou ter seus horários alterados.
												Acompanhe as redes sociais para informações atualizadas.
											</p>
										</div>

										<div>
											<h4 className='font-semibold'>Haverá estacionamento?</h4>
											<p className='mt-1 text-gray-700 dark:text-gray-300'>
												Sim, o estacionamento do parque estará disponível, mas
												com capacidade limitada e taxa de utilização.
												Recomendamos o uso de transporte público.
											</p>
										</div>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</main>

				{/* Seção de destaque */}
				<section className='bg-[#0066CC]/10 py-12'>
					<div className='container mx-auto px-4'>
						<div className='max-w-3xl mx-auto text-center'>
							<h2 className='text-2xl md:text-3xl font-bold mb-6 text-[#0066CC]'>
								Participe do Festival Cultural de São Paulo
							</h2>
							<p className='text-gray-700 dark:text-gray-300 mb-8'>
								Não perca a oportunidade de vivenciar a riqueza cultural da
								maior cidade do Brasil. Inscreva-se agora e faça parte deste
								evento único!
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<Button className='bg-[#0066CC] hover:bg-[#0055AA]'>
									Inscreva-se Agora
								</Button>
								<Button
									variant='outline'
									className='border-[#0066CC] text-[#0066CC]'>
									Ver Programação Completa
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className='bg-[#0066CC] text-white py-8'>
					<div className='container mx-auto px-4'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div>
								<div className='flex items-center gap-2 mb-4'>
									<Image
										src={escudo}
										alt='Brasão da Prefeitura de São Paulo'
										width={40}
										height={40}
										className='bg-white rounded-full p-1'
									/>
									<span className='font-semibold'>Prefeitura de São Paulo</span>
								</div>
								<p className='text-sm'>
									Secretaria Municipal de Cultura
									<br />
									Av. São João, 473 - Centro
									<br />
									São Paulo - SP, 01035-000
								</p>
							</div>

							<div>
								<h3 className='font-semibold mb-4'>Links Úteis</h3>
								<ul className='space-y-2 text-sm'>
									<li>
										<Link
											href='#'
											className='hover:underline'>
											Portal da Prefeitura
										</Link>
									</li>
									<li>
										<Link
											href='#'
											className='hover:underline'>
											Secretaria de Cultura
										</Link>
									</li>
									<li>
										<Link
											href='#'
											className='hover:underline'>
											Turismo em São Paulo
										</Link>
									</li>
									<li>
										<Link
											href='#'
											className='hover:underline'>
											Mapa Cultural
										</Link>
									</li>
									<li>
										<Link
											href='#'
											className='hover:underline'>
											Agenda Cultural
										</Link>
									</li>
								</ul>
							</div>

							<div>
								<h3 className='font-semibold mb-4'>Contato</h3>
								<ul className='space-y-2 text-sm'>
									<li>Telefone: (11) 3333-4444</li>
									<li>E-mail: festival@prefeitura.sp.gov.br</li>
								</ul>
								<div className='flex gap-3 mt-4'>
									<Button
										variant='ghost'
										size='sm'
										className='h-8 w-8 p-0 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='18'
											height='18'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<rect
												width='20'
												height='20'
												x='2'
												y='2'
												rx='5'
												ry='5'
											/>
											<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
											<line
												x1='17.5'
												x2='17.51'
												y1='6.5'
												y2='6.5'
											/>
										</svg>
									</Button>
									<Button
										variant='ghost'
										size='sm'
										className='h-8 w-8 p-0 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='18'
											height='18'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
										</svg>
									</Button>
									<Button
										variant='ghost'
										size='sm'
										className='h-8 w-8 p-0 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='18'
											height='18'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
										</svg>
									</Button>
									<Button
										variant='ghost'
										size='sm'
										className='h-8 w-8 p-0 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='18'
											height='18'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' />
											<path d='m10 15 5-3-5-3z' />
										</svg>
									</Button>
								</div>
							</div>
						</div>
						{session?.user?.nome}
						<Sair session={session} />
						<div className='border-t border-white/20 mt-8 pt-6 text-center text-sm'>
							<p>
								© 2025 Prefeitura de São Paulo. Todos os direitos reservados.
							</p>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
