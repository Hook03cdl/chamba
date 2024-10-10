import { usePathname } from 'next/navigation';
import { JobProps } from '@/lib/interfaces/interface';
import Popover, { PopLink } from '../ui/Popover';
import { ChevronDown } from 'lucide-react';
import { fetchDataJobs } from '@/lib/data/jobs';

export default async function NavChambas() {
	// const path = usePathname();
	// const jobs = await fetchDataJobs();
	// console.log(jobs);

	return (
		<Popover
			fallback={
				<div className="flex flex-row justify-center items-center">
					<span className="text-gray-800 font-bold">Chambas</span>
					<ChevronDown size="1.5em" />
				</div>
			}
		>
			<div className="min-w-72 h-96 overflow-y-auto grid grid-cols-2 gap-4">
				{/* {jobs?.map((job) => (
					<PopLink key={job.id} href={`/chambas/${job.slug}`}>
						<div className="flex flex-col">
							<span>{job.name}</span>
							<p className="text-sm font-normal text-gray-400">
								{job.description}
							</p>
						</div>
					</PopLink>
				))} */}
			</div>
		</Popover>
	);
}
