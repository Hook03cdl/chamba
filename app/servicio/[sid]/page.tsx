/* eslint-disable @next/next/no-img-element */

import Each from '@/components/Each';
import HabilityCard from '@/components/servicio/HabilityCard';
import Separator from '@/components/ui/Separator';
import { url } from 'inspector';
import Link from 'next/link';

export default function page({ params }: { params: { sid: string } }) {
	const user = {
		name: 'User',
		banner: '/images/notFound.png',
		rating: '7.2',
		jobs: '134',
		socialMedia: [{ name: 'Plomibaños', url: 'www.ejemplo.com' }],
		habilitys: ['Electricista', 'Plomeria', 'Carpinteria'],
	};
	return (
		<section className="min-h-svh">
			<article className="grid gap-5">
				<div>
					<img
						src={user.banner || '/images/notFound.png'}
						alt={user.name}
						className="w-full h-96 object-cover rounded-xl"
					/>
					<h2 className="space-x-2">
						<span className="text-2xl font-semibold ">{user.name}</span>
						<span className="text-sm bg-niagara-600/50 px-2 rounded-full">
							7.2
						</span>
					</h2>
					<p className="text-xs text-gray-400">
						{user.jobs} trabajos realizados
					</p>
				</div>
				<Separator />
				<div className="flex">
					<div className="flex-1">
						<h1 className="text-2xl text-gray-400">Redes socicales</h1>
						<>
							<Each
								of={user.socialMedia}
								render={(m, i) => (
									<Link href={m.url} key={i} className="font-medium text-2xl">
										<h3>{m.name}</h3>
									</Link>
								)}
							/>
						</>
					</div>
					<Separator vertical />
					<div className="flex-1">
						<h1 className="text-2xl text-gray-400">Habilidades</h1>
						<div className="flex flex-wrap gap-3">
							<Each
								of={user.habilitys}
								render={(h, i) => <HabilityCard title={h} key={i} />}
							/>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}
