import { fetchDataJobs } from '@/lib/data/jobs';
import React from 'react';
import ActiveLink from './ActiveLink';

export default async function Jobs() {
	const jobs = await fetchDataJobs();
	return (
		<div className="flex gap-5">
			<ActiveLink href={'/'}>Todos</ActiveLink>
			{jobs?.map((job) => (
				<ActiveLink key={job.id} href={`/?chamba=${job.slug}`}>
					{job.name}
				</ActiveLink>
			))}
		</div>
	);
}
