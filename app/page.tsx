/** @format */

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, HelpCircle, Info, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import hero from '../public/hero-image.jpg';

export default async function Home() {
	return (
		<div className='grid w-full  h-full '>
			<div className='flex h-full flex-col '>
				{/* Banner do evento */}
				<div className='relative h-full  w-full'>
					<Image
						src={hero}
						alt='Imagem do evento'
						className='object-cover h-[680px]'
						priority
					/>
					<div className='absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center p-4'>
						<span className='motion-preset-float motion-delay-200 bg-primary/50 px-4 py-1 rounded-full text-sm font-medium mb-10'>
							15 a 20 de Agosto de 2025
						</span>
						<h1 className='intersect-once intersect:motion-preset-slide-up motion-delay-150 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl'>
							Festival Cultural de São Paulo
						</h1>
						<p className='intersect-once intersect:motion-preset-slide-up motion-delay-200 text-lg md:text-xl max-w-2xl mb-6'>
							Celebrando a diversidade cultural da maior cidade do Brasil
						</p>
						<Link
							href={'/inscricao'}
							className='intersect-once intersect:motion-preset-slide-up motion-delay-400'>
							<Button
								size={'lg'}
								className='text-lg'>
								Inscreva-se Agora
							</Button>
						</Link>
					</div>
				</div>

				{/* Conteúdo principal com acordeões */}
				<main className='container h-full mx-auto px-4 py-10'>
					<h2 className='intersect:motion-preset-slide-up motion-delay-150 text-2xl md:text-3xl font-bold text-center mb-8 text-primary'>
						Informações do Evento
					</h2>

					<Accordion
						type='single'
						collapsible
						className='w-full max-w-3xl mx-auto space-y-4'>
						<AccordionItem
							value='item-1'
							className='border rounded-lg px-4 intersect:motion-preset-slide-up motion-delay-150'>
							<AccordionTrigger className='py-4 flex gap-3 items-center'>
								<div className=' flex items-center w-full'>
									<Info className='h-5 w-5 text-primary flex-shrink-0 col-span-0' />
									<p className='font-medium w-full text-center'>
										Sobre o Evento
									</p>
								</div>
							</AccordionTrigger>
							<AccordionContent className='pb-4 pt-1 px-9'>
								<p className='text-gray-700 dark:text-gray-300'>
									O Festival Cultural de São Paulo é um evento anual organizado
									pela Prefeitura Municipal que celebra a rica diversidade
									cultural da cidade. Com apresentações artísticas, exposições,
									workshops e gastronomia, o festival reúne o melhor da cultura
									paulistana em um só lugar.
								</p>
								<p className='text-gray-700 dark:text-gray-300 mt-3'>
									Em sua 10ª edição, o festival deste ano terá como tema
									&rdquo;São Paulo: Encontro de Culturas&rdquo;, destacando a
									influência das diversas comunidades que formam a identidade da
									cidade.
								</p>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value='item-2'
							className='border rounded-lg px-4 intersect:motion-preset-slide-up motion-delay-200'>
							<AccordionTrigger className='py-4 flex gap-3 items-center'>
								<div className=' flex items-center w-full'>
									<Calendar className='h-5 w-5 text-primary flex-shrink-0' />
									<p className='font-medium w-full text-center'>
										Data e Horário
									</p>
								</div>
								<span className='font-medium'></span>
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
										<strong>Cerimônia de Abertura:</strong> 15 de Agosto às 19h
									</p>
									<p className='text-gray-700 dark:text-gray-300'>
										<strong>Encerramento:</strong> 20 de Agosto às 21h com show
										especial
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value='item-3'
							className='border rounded-lg px-4 intersect:motion-preset-slide-up motion-delay-300'>
							<AccordionTrigger className='py-4 flex gap-3 items-center'>
								<div className=' flex items-center w-full'>
									<MapPin className='h-5 w-5 text-primary flex-shrink-0' />
									<p className='font-medium w-full text-center'>Local</p>
								</div>
								<span className='font-medium'></span>
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
										O evento acontecerá em diversas áreas do parque, incluindo:
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
							className='border rounded-lg px-4 intersect:motion-preset-slide-up motion-delay-300'>
							<AccordionTrigger className='py-4 flex gap-3 items-center'>
								<div className=' flex items-center w-full'>
									<Clock className='h-5 w-5 text-primary flex-shrink-0' />
									<p className='font-medium w-full text-center'>Programação</p>
								</div>
							</AccordionTrigger>
							<AccordionContent className='pb-4 pt-1 px-9'>
								<div className='space-y-4'>
									<div>
										<h4 className='font-semibold text-primary'>
											15 de Agosto (Abertura)
										</h4>
										<ul className='mt-2 space-y-2'>
											<li className='flex gap-2'>
												<span className='text-sm font-medium w-16'>10:00</span>
												<span className='text-gray-700 dark:text-gray-300'>
													Abertura dos portões e exposições
												</span>
											</li>
											<li className='flex gap-2'>
												<span className='text-sm font-medium w-16'>14:00</span>
												<span className='text-gray-700 dark:text-gray-300'>
													Workshop de arte urbana
												</span>
											</li>
											<li className='flex gap-2'>
												<span className='text-sm font-medium w-16'>19:00</span>
												<span className='text-gray-700 dark:text-gray-300'>
													Cerimônia oficial de abertura
												</span>
											</li>
											<li className='flex gap-2'>
												<span className='text-sm font-medium w-16'>20:30</span>
												<span className='text-gray-700 dark:text-gray-300'>
													Show de música com artistas locais
												</span>
											</li>
										</ul>
									</div>

									<div>
										<h4 className='font-semibold text-primary'>16 de Agosto</h4>
										<ul className='mt-2 space-y-2'>
											<li className='flex gap-2'>
												<span className='text-sm font-medium w-16'>10:00</span>
												<span className='text-gray-700 dark:text-gray-300'>
													Feira de artesanato
												</span>
											</li>
											<li className='flex gap-2'>
												<span className='text-sm font-medium w-16'>13:00</span>
												<span className='text-gray-700 dark:text-gray-300'>
													Apresentações de dança folclórica
												</span>
											</li>
											<li className='flex gap-2'>
												<span className='text-sm font-medium w-16'>16:00</span>
												<span className='text-gray-700 dark:text-gray-300'>
													Painel: &quot;A História Cultural de São Paulo&quot;
												</span>
											</li>
											<li className='flex gap-2'>
												<span className='text-sm font-medium w-16'>20:00</span>
												<span className='text-gray-700 dark:text-gray-300'>
													Apresentação teatral
												</span>
											</li>
										</ul>
									</div>

									<p className='text-sm text-muted-foreground  italic'>
										* A programação completa dos demais dias está disponível no
										site oficial do evento e no aplicativo da Prefeitura.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem
							value='item-6'
							className='border rounded-lg px-4 intersect:motion-preset-slide-up motion-delay-700'>
							<AccordionTrigger className='py-4 flex gap-3 items-center'>
								<div className=' flex items-center w-full'>
									<Phone className='h-5 w-5 text-primary flex-shrink-0' />
									<p className='font-medium w-full text-center'>Contato</p>
								</div>
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
													className='text-primary'>
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
													className='text-primary'>
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
													className='text-primary'>
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
													className='text-primary'>
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
							value='item-7'
							className='border rounded-lg px-4 z-50 intersect:motion-preset-slide-up motion-delay-700'>
							<AccordionTrigger className='py-4 flex gap-3 items-center'>
								<div className=' flex items-center w-full'>
									<HelpCircle className='h-5 w-5 text-primary flex-shrink-0' />
									<p className='font-medium w-full text-center'>
										Perguntas Frequentes
									</p>
								</div>
							</AccordionTrigger>
							<AccordionContent className='px-9 pb-4 pt-1'>
								<div className='flex flex-col gap-4'>
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
											Haverá intérpretes de Libras nas principais apresentações
											e material em Braille disponível nos postos de informação.
										</p>
									</div>

									<div>
										<h4 className='font-semibold'>
											Posso levar animais de estimação?
										</h4>
										<p className='mt-1 text-gray-700 dark:text-gray-300'>
											Animais de estimação são permitidos, desde que estejam com
											coleira e sob responsabilidade do dono. Cães-guia têm
											acesso garantido a todas as áreas.
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
											Não. As atividades ao ar livre podem ser remanejadas para
											áreas cobertas ou ter seus horários alterados. Acompanhe
											as redes sociais para informações atualizadas.
										</p>
									</div>

									<div>
										<h4 className='font-semibold'>Haverá estacionamento?</h4>
										<p className='mt-1 text-gray-700 dark:text-gray-300'>
											Sim, o estacionamento do parque estará disponível, mas com
											capacidade limitada e taxa de utilização. Recomendamos o
											uso de transporte público.
										</p>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</main>

				{/* Seção de destaque */}
				<section className='bg-primary/10 py-12'>
					<div className='container mx-auto px-4'>
						<div className='max-w-3xl mx-auto text-center'>
							<h2 className='text-2xl md:text-3xl intersect:motion-preset-slide-up motion-delay-150 font-bold mb-6 text-foreground'>
								Participe do Festival Cultural de São Paulo
							</h2>
							<p className='text-muted-foreground intersect:motion-preset-slide-up motion-delay-200 text-balance mb-8'>
								Não perca a oportunidade de vivenciar a riqueza cultural da
								maior cidade do Brasil. Inscreva-se agora e faça parte deste
								evento único!
							</p>
							<div className='flex flex-col intersect:motion-preset-slide-up motion-delay-300 sm:flex-row gap-4 justify-center'>
								<Link href={'/inscricao'}>
									<Button
										size={'lg'}
										className='text-lg'>
										Inscreva-se Agora
									</Button>
								</Link>
								{/* <Button
									variant='outline'
									className='border-[#0066CC] text-primary'>
									Ver Programação Completa
								</Button> */}
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
