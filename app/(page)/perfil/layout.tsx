/* eslint-disable @next/next/no-img-element */

import Navbar from '@/components/servicio/Navbar';
import { Button } from '@/components/ui/button';
import Separator from '@/components/ui/Separator';
import Tags from '@/components/ui/Tags';
import { fetchDataUser } from '@/lib/data/user';

export default async function PerfilLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = await fetchDataUser();
	// console.log(user);

	return (
		<section className="min-h-svh p-5">
			<div className="flex items-center gap-10">
				<img
					src="/images/notFound.png"
					alt="foto de perfil"
					className="rounded-full size-52 aspect-auto object-cover cursor-pointer"
				/>
				<div className="space-y-5">
					<div className="space-y-2">
						<h2 className="text-2xl font-semibold">Natanael Cano</h2>
						<Tags texts={['Albañil', 'Plomero']} />
					</div>
					<div className="flex items-center gap-5">
						<Button size={'sm'} className="px-5">
							Editar perfil
						</Button>
						<Button size={'sm'} variant={'outline'}>
							Compartir perfil
						</Button>
					</div>
				</div>
				<div className="ml-20 flex gap-10">
					<div>
						<h4 className="font-semibold">Seguidores</h4>
						<p className="text-center text-sm font-semibold">177</p>
					</div>
					<div>
						<h4 className="font-semibold">Trabajos realizados</h4>
						<p className="text-center text-sm font-semibold">3</p>
					</div>
					<div>
						<h4 className="font-semibold">Rating</h4>
						<p className="text-center text-sm font-semibold">3</p>
					</div>
				</div>
			</div>
			<Separator />
			<div className="space-y-5">
				<Navbar />
				{children}
			</div>
		</section>
	);
}
