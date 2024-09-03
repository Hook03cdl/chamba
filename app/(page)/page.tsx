import Card from '@/components/Card';
import Each from '@/components/Each';
import { fetchDataChambas } from '@/lib/data/chambas';
import { ChambaProps } from '@/lib/interfaces/interface';
import { randomUUID } from 'crypto';

export default async function Home() {
	const servicios = [
		{
			sid: randomUUID(),
			name: 'servicio 2',
			src: '',
			price: '249',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse repellendus aut tempore autem porro architecto rerum aspernatur dolore tempora dolorum, blanditiis eos corporis molestias libero adipisci labore aperiam officia!',
			rating: '7.3',
		},
		{
			sid: randomUUID(),
			name: 'servicio 3',
			src: '',
			price: '249',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse repellendus aut tempore autem porro architecto rerum aspernatur dolore tempora dolorum, blanditiis eos corporis molestias libero adipisci labore aperiam officia!',
			rating: '7.3',
		},
		{
			sid: randomUUID(),
			name: 'servicio 4',
			src: '',
			price: '249',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse repellendus aut tempore autem porro architecto rerum aspernatur dolore tempora dolorum, blanditiis eos corporis molestias libero adipisci labore aperiam officia!',
			rating: '7.3',
		},
		{
			sid: randomUUID(),
			name: 'servicio 5',
			src: '',
			price: '249',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse repellendus aut tempore autem porro architecto rerum aspernatur dolore tempora dolorum, blanditiis eos corporis molestias libero adipisci labore aperiam officia!',
			rating: '7.3',
		},
	];

	const chambas = (await fetchDataChambas()) ?? [];

	return (
		<section className="p-5 min-h-svh">
			<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-10">
				<Each
					of={chambas}
					render={(c: ChambaProps) => (
						<Card
							href={`/servicio/${c.id.toString()}}`}
							src={''}
							name={`${c.title} ${c.worker_name}`}
							description={c.description}
							rating={c.job_id}
						/>
					)}
				/>
			</div>
		</section>
	);
}
