import Card from '@/components/Card';
import Each from '@/components/Each';
import NavChambas from '@/components/header/NavChambas';
import { fetchDataChambas } from '@/lib/data/chambas';
import { ChambaProps } from '@/lib/interfaces/interface';

export default async function Home() {
	const chambas = await fetchDataChambas();
	console.log(chambas);

	return (
		<section className="p-5 px-20 min-h-svh">
			<NavChambas chambas={['Albañil', 'Plomero', 'Carpintero', 'Yesero']} />

			<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-10">
				<Each
					of={chambas || []}
					render={(c: ChambaProps) => (
						<Card
							href={`/servicio/${c.slug}`}
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
