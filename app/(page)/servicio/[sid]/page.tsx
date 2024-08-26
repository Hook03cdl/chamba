/* eslint-disable @next/next/no-img-element */

import Each from '@/components/Each';
import HabilityCard from '@/components/servicio/HabilityCard';
import Separator from '@/components/ui/Separator';
import { ToolTip } from '@/components/ui/Tooltip';
import Link from 'next/link';

export default function page({ params }: { params: { sid: string } }) {
	const user = {
		name: 'User',
		banner: '/images/notFound.png',
		rating: '7.2',
		jobs: '134',
		socialMedia: {
			instagram: {
				name: 'Plomibaños',
				url: 'https://www.instagram.ejemplo.com',
			},
			facebook: { name: 'Plomibaños', url: 'https://www.facebook.ejemplo.com' },
			twitter: { name: 'Plomibaños', url: 'https://www.twitter.ejemplo.com' },
		},

		habilitys: ['Electricista', 'Plomeria', 'Carpinteria'],
	};
	return (
		<section className="min-h-svh p-5">
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
					<div className="flex-1 space-y-5">
						<h1 className="text-2xl text-gray-400">Redes socicales</h1>

						<div>
							<Link
								href={user.socialMedia.instagram.url}
								className="font-medium"
							>
								<h3>{user.socialMedia.instagram.name}</h3>
								<p className="text-sm text-gray-400">
									{user.socialMedia.instagram.url}
								</p>
							</Link>
							<Separator />
							{user.socialMedia.facebook && (
								<Link
									href={user.socialMedia.facebook.url}
									className="font-medium "
								>
									<h3>{user.socialMedia.facebook.name}</h3>
									<p className="text-sm text-gray-400">
										{user.socialMedia.facebook.url}
									</p>
								</Link>
							)}
							<Separator />

							<Link
								href={user.socialMedia.twitter.url}
								className="font-medium "
							>
								<h3>{user.socialMedia.twitter.name}</h3>
								<p className="text-sm text-gray-400">
									{user.socialMedia.twitter.url}
								</p>
							</Link>
						</div>
					</div>
					<Separator vertical />
					<div className="flex-1">
						<h1 className="text-2xl text-gray-400">Habilidades</h1>
						<div className="flex flex-wrap gap-3">
							<Each
								of={user.habilitys}
								render={(h, i) => (
									<ToolTip
										content={
											<>
												<h3 className="text-xs text-gray-300">Experiencia</h3>
												<p className="text-sm text-nowrap">3 a 4 Años</p>
											</>
										}
									>
										<HabilityCard title={h} key={i} />
									</ToolTip>
								)}
							/>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}
