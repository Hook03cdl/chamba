/* eslint-disable @next/next/no-img-element */

import Navbar from '@/components/profile/Navbar';
import { Button } from '@/components/ui/button';
import Separator from '@/components/ui/Separator';
import Tags from '@/components/ui/Tags';
import { fetchDataUser, fetchJobsUser } from '@/lib/data/user';
import { Camera, ChartCandlestick, Mailbox, Users, Wrench } from 'lucide-react';
import ButtonEditProfile from '@/components/profile/ButtonEditProfile';

export default async function PerfilLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = await fetchDataUser();
	const jobsUser = await fetchJobsUser();
	const jobs = jobsUser?.map((job) => job.name);

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
						<h2 className="text-2xl font-semibold">{user?.name}</h2>
						<Tags texts={jobs ? jobs : []} />
					</div>
					<div className="flex items-center gap-5">
						<ButtonEditProfile />
						<Button size={'sm'} variant={'outline'}>
							Compartir perfil
						</Button>
					</div>
				</div>
				<div className="ml-20 flex gap-10">
					<div className="grid place-items-center">
						<Users />
						<h4 className="font-semibold">Seguidores</h4>
						<p className="text-center text-sm font-semibold">177</p>
					</div>
					<div className="grid place-items-center">
						<Wrench />
						<h4 className="font-semibold">Trabajos realizados</h4>
						<p className="text-center text-sm font-semibold">3</p>
					</div>
					<div className="grid place-items-center">
						<ChartCandlestick />
						<h4 className="font-semibold">Rating</h4>
						<p className="text-center text-sm font-semibold">{user?.rating}</p>
					</div>
				</div>
			</div>
			<Separator />
			<div className="space-y-5">
				<Navbar
					navOptions={[
						{ href: '/perfil', text: 'Galerias', icon: <Camera /> },
						{ href: '/perfil/info', text: 'Información', icon: <Mailbox /> },
					]}
				/>
				{children}
			</div>
		</section>
	);
}
