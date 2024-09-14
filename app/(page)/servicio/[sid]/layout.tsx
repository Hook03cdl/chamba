/* eslint-disable @next/next/no-img-element */

import ButtonOpenModal from '@/components/profile/ButtonOpenModal';
import Gallery from '@/components/profile/Gallery';
import Navbar from '@/components/profile/Navbar';
import UserActions from '@/components/profile/UserActions';
import { Button } from '@/components/ui/button';
import Popover from '@/components/ui/Popover';
import Separator from '@/components/ui/Separator';
import Tags from '@/components/ui/Tags';
import { fetchDataChamba } from '@/lib/data/chambas';
import fetchReviewsData from '@/lib/data/reviews';
import {
	UserRoundPlus,
	Ellipsis,
	Camera,
	MessageCircleMore,
} from 'lucide-react';

export default async function ServicePage({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { sid: string };
}) {
	const chamba = await fetchDataChamba(params.sid);
	// console.log(chamba);

	return (
		<section className="min-h-svh p-5">
			<div className="space-y-5">
				<div className="flex items-center gap-10">
					<img
						src="/images/notFound.png"
						alt="foto de perfil"
						className="rounded-full size-52 aspect-auto object-cover cursor-pointer"
					/>
					<div className="space-y-5 w-full">
						<div className="space-y-2">
							<h2 className="text-2xl font-semibold">
								{chamba?.worker_name}
								<span className="text-gray-400 text-sm">({chamba?.title})</span>
							</h2>
							{chamba?.job_name && <Tags texts={chamba?.job_name} />}
						</div>
						<div className="flex justify-between items-center">
							<div className="flex items-center gap-5">
								<ButtonOpenModal text="Contratar" />
								<Button size={'sm'} variant={'outline'}>
									<UserRoundPlus />
								</Button>
								<Popover fallback={<Ellipsis />}>
									<UserActions />
								</Popover>
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
					</div>
				</div>
				<p>{chamba?.description}</p>
			</div>
			<Separator />
			<div className="space-y-5">
				<Navbar
					navOptions={[
						{
							href: `/servicio/${params.sid}`,
							text: 'Galeria',
							icon: <Camera />,
						},
						{
							href: `/servicio/${params.sid}/comentarios`,
							text: 'Comentarios',
							icon: <MessageCircleMore />,
						},
					]}
				/>
				{children}
			</div>
		</section>
	);
}
