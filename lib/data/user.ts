'use server';

import {
	JobContainerProps,
	JobProps,
	UserProps,
} from '../interfaces/interface';
import { Fetch } from '../Fetch';
import { getToken } from '../utils/tokens';

export async function fetchDataUser(): Promise<UserProps | undefined> {
	const session = await getToken('session');

	if (session) {
		try {
			const user = await Fetch<UserProps>('/user', {
				headers: {
					Authorization: `Bearer ${session}`,
				},
			});
			return user;
		} catch (error) {
			console.log('Error user', error);
		}
	}
	return undefined;
}

export async function fetchJobsUser(): Promise<JobProps[] | []> {
	const session = await getToken('session');

	try {
		const { jobs } = await Fetch<JobContainerProps>('/user/showJobs', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${session}`,
			},
		});

		return jobs;
	} catch (error) {
		console.log('Error user', error);
	}
	return [];
}
