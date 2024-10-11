import Card from '@/components/Card';
import Each from '@/components/Each';
import Filter from '@/components/filter/Filter';
import { fetchDataChambas } from '@/lib/data/chambas';
import { ChambaProps } from '@/lib/interfaces/interface';

export default async function Home() {
	const chambas = await fetchDataChambas();

	return (
		<>
			<Filter />
			<section className="p-5 px-20 min-h-svh">
				<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-10">
					<Each
						of={chambas || []}
						render={(c: ChambaProps) => (
							<Card
								href={`/chamba/${c.slug}`}
								src={c.path}
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
		</>
	);
}
