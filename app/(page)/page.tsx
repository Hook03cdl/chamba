import Card from '@/components/Card';
import Each from '@/components/Each';
import { fetchDataChambas } from '@/lib/data/chambas';
import { ChambaProps } from '@/lib/interfaces/interface';

export default async function Home() {
	const chambas = (await fetchDataChambas()) ?? [];

	return (
		<section className="p-5 min-h-svh">
			<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] place-items-center gap-5">
				<Each
					of={chambas}
					render={(c: ChambaProps) => (
						<Card
							href={`/servicio/${c.id.toString()}`}
							src={''}
							id={c.id.toString()}
							name={`${c.title}`}
							description={c.description}
							rating={c.rating}
							worker_name={c.worker_name}
							job_name={c.trabajo_name}
						/>
					)}
				/>
			</div>
		</section>
	);
}
