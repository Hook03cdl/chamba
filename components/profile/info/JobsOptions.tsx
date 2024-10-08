'use client';

import Each from '@/components/Each';
import SkeletonChambas from '@/components/skeleton/SkeletonChambas';
import { Checkbox } from '@/components/ui/Inputs';
import { fetchDataJobs } from '@/lib/data/jobs';
import { fetchJobsUser } from '@/lib/data/user';
import { JobProps } from '@/lib/interfaces/interface';
import { useEffect, useState } from 'react';

export default function JobsOptions() {
	const [jobs, setJobs] = useState<JobProps[] | undefined>(undefined);
	const [userJobs, setUserJobs] = useState<JobProps[] | undefined>(undefined);

	useEffect(() => {
		async function fetchJobs() {
			const data = await fetchDataJobs();
			// const userJobsData = await fetchJobsUser();

			setJobs(data);
			setUserJobs(data);
		}
		fetchJobs();
	}, []);

	if (!jobs) {
		return <SkeletonChambas />;
	}

	return (
		<>
			{jobs && (
				<Each
					of={jobs}
					render={(job) => (
						<div className="hover:bg-slate-300 p-2 rounded-md transition-colors duration-300">
							<Checkbox label={job.name} value={job.id} name="jobs_ids">
								<p className={'text-gray-500'}>{job.description}</p>
							</Checkbox>
						</div>
					)}
				/>
			)}
		</>
	);
}
