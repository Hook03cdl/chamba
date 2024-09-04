/* eslint-disable @next/next/no-img-element */

import ButtonOpenModal from '@/components/servicio/ButtonOpenModal';
import Gallery from '@/components/servicio/Gallery';
import UserActions from '@/components/servicio/UserActions';
import { Button } from '@/components/ui/button';
import Popover from '@/components/ui/Popover';
import Separator from '@/components/ui/Separator';
import Tags from '@/components/ui/Tags';
import { fetchDataChamba } from '@/lib/data/chambas';
import { UserRoundPlus, Ellipsis, Camera } from 'lucide-react';

const photos = [
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
];
export default async function ServicePage({
	params,
}: {
	params: { sid: string };
}) {
	const chamba = await fetchDataChamba(params.sid);

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
						<h2 className="text-2xl font-semibold ">
							{chamba?.title} {chamba?.worker_name}
						</h2>
						{chamba?.worker_name && <Tags texts={chamba?.job_name} />}
					</div>
					<div className="flex items-center gap-5">
						<ButtonOpenModal text="Contratar" />
						<Button size={'sm'} variant={'outline'}>
							<UserRoundPlus />
						</Button>
						<Popover fallback={<Ellipsis />}>
							<UserActions />
						</Popover>
					</div>
				</div>
				<div className="mx-auto flex gap-10">
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
				<h2 className="flex items-center gap-2">
					<span>
						<Camera />
					</span>
					Galería
				</h2>
				<Gallery photos={photos} />
			</div>
		</section>
	);
}
