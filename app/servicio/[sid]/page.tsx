/* eslint-disable @next/next/no-img-element */

import HabilityCard from '@/components/servicio/HabilityCard';
import Separator from '@/components/ui/Separator';

export default function page({ params }: { params: { sid: string } }) {
	return (
		<section className="min-h-svh">
			<article className="grid gap-5">
				<div>
					<img
						src={'/images/notFound.png'}
						alt=""
						className="w-full h-96 object-cover rounded-xl"
					/>
					<h2 className="space-x-2">
						<span className="text-2xl font-semibold ">Nombre</span>
						<span className="text-sm bg-niagara-600/50 px-2 rounded-full">
							7.2
						</span>
					</h2>
					<p className="text-xs text-gray-400">134 trabajos realizados</p>
				</div>
				<Separator />
				<div className="flex">
					<div className="flex-1">
						<h1 className="text-2xl text-gray-400">Contactos</h1>
						<div></div>
					</div>
					<Separator vertical />
					<div className="flex-1">
						<h1 className="text-2xl text-gray-400">Habilidades</h1>
						<div className="flex flex-wrap gap-3">
							<HabilityCard title={'Electricista'} />
							<HabilityCard title={'Electricista'} />
							<HabilityCard title={'Electricista'} />
							<HabilityCard title={'Electricista'} />
							<HabilityCard title={'Electricista'} />
							<HabilityCard title={'Electricista'} />
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}
