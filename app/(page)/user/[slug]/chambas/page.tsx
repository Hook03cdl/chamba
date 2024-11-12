'use client';
import { fetchDataChambas } from '@/lib/data/chambas';
import Each from '@/components/Each';
import { ChambaProps } from '@/lib/interfaces/interface';
import Card from '@/components/Card';
import { getWorkerChambas } from '@/lib/data/user';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
	const [chambas, setChambas] = useState<ChambaProps[]>();
	const params = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const chambas = await getWorkerChambas(String(params.slug));
			setChambas(chambas);
		};
		fetchData();
	}, [params.slug]);
	return (
		<div className='w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-content-center gap-10'>
			{chambas && (
				<Each
					of={chambas}
					render={(c: ChambaProps) => (
						<Card
							href={`/chamba/${c.slug}`}
							src={c.path}
							id={c.id}
							worker_slug={c.worker_slug}
							name={String(c.title)}
							description={c.description}
							worker_name={c.worker_name}
							rating={c.rating}
							job_name={c.job_name}
						/>
					)}
				/>
			)}
		</div>
	);
}
