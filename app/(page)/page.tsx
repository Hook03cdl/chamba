import Card from '@/components/Card';
import Each from '@/components/Each';
import Filter from '@/components/filter/Filter';
import { fetchDataChambas, fetchDataChambasBySlug } from '@/lib/data/chambas';
import { ChambaProps } from '@/lib/interfaces/interface';
import { notFound } from 'next/navigation';

export default async function Home({
	searchParams,
}: {
	searchParams: { chamba: string };
}) {
	let chambasBySlug = undefined;
	let chambas = undefined;
	try {
		chambas = await fetchDataChambas();
		if (searchParams['chamba']) {
			chambasBySlug = await fetchDataChambasBySlug(searchParams['chamba']);
		}
	} catch (error) {
		notFound();
	}

	const renderData = searchParams['chamba'] ? chambasBySlug : chambas;

	return (
		<>
			<Filter />
			{renderData && renderData?.length > 0 ? (
				<section className="p-5 px-20 min-h-svh">
					<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-content-center gap-10">
						<Each
							of={renderData}
							render={(c: ChambaProps) => (
								<Card
									href={`/chamba/${c.slug}`}
									src={c.path}
									id={c.id.toString()}
									name={`${c.title}`}
									description={c.description}
									rating={c.rating}
									worker_slug={c.worker_slug}
									worker_name={c.worker_name}
									job_name={c.trabajo_name}
								/>
							)}
						/>
					</div>
				</section>
			) : (
				<div className="flex justify-center items-center flex-col min-h-svh text-shark">
					<h2 className="text-7xl">Upsss</h2>
					<h3 className="text-3xl">
						Lo sentimos pero no encontramos trabajadores con esa profesion
					</h3>
				</div>
			)}
		</>
	);
}
