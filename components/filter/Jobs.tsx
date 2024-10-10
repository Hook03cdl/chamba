import { fetchDataJobs } from '@/lib/data/jobs';
import React from 'react';
import Link from 'next/link';

export default async function Jobs() {
	const jobs = await fetchDataJobs();
	return (
		<div className="flex gap-5">
			{jobs?.map((job) => (
				<Link
					className="text-nowrap p-2 hover:bg-gray-300 rounded-md"
					key={job.id}
					href={`/chambas/${job.slug}`}
				>
					{job.name}
				</Link>
			))}
		</div>
	);
}
