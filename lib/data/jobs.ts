'use server';
import { Fetch } from '../Fetch';
import { JobProps } from '../interfaces/interface';

export async function fetchDataJobs(): Promise<JobProps[] | undefined> {
	try {
		const jobs = await Fetch<JobProps[]>('/jobs', {
			method: 'GET',
		});
		if (jobs) {
			return jobs;
		}
	} catch (e) {
		console.error(e);
		return undefined;
	}
	return;
}
