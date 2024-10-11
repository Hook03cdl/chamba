import Card from '@/components/Card';
import Each from '@/components/Each';
import { fetchDataChambasBySlug } from '@/lib/data/chambas';
import { fetchDataChambas } from '@/lib/data/chambas';
import { ChambaProps } from '@/lib/interfaces/interface';

export default async function Page({ params }: { params: { slug: string } }) {
	const chambas = await fetchDataChambasBySlug(params.slug);
	const allChambas = await fetchDataChambas();
	console.log(params.slug.replaceAll("-", " "))

	return (
		<section className="p-4 px-20 min-h-svh">
			<div className='w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-10'>
				{/* {chambas ? (
					<Each
						of={chambas}
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
				) : null} */}

				{
					allChambas?.map((c, index) => {
						if (c.job_name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === params.slug.toLowerCase().replaceAll("-", " ")) {
							return (
								<Card
									key={index}
									href={`/chamba/${c.slug}`}
									src={''}
									id={c.id.toString()}
									name={`${c.title}`}
									description={c.description}
									rating={c.rating}
									worker_name={c.worker_name}
									job_name={c.trabajo_name}
								/>
							)
						}
					})
				}

			</div >
		</section >
	);
}
