import Separator from '@/components/ui/Separator';
import { fetchWorkers } from '@/lib/data/workers';
import Each from '@/components/Each';
import { UserProps } from '@/lib/interfaces/interface';
import WorkerCard from '@/components/WorkerCard';

export default async function Page() {
	const workers = await fetchWorkers();
	return (
		<div className="bg-white p-4 m-4 rounded-lg">
			<h1 className="font-semibold text-gray-800 text-2xl">
				Nuestros trabajadores verificados.
			</h1>
			<Separator />
			<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-content-center gap-10">
				<Each of={workers} render={(w: UserProps) => <WorkerCard user={w} />} />
			</div>
		</div>
	);
}
