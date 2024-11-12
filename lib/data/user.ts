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

export async function getUserInfoSlug(
	slug: string
): Promise<UserProps | undefined> {
	const session = await getToken('session');

	if (!session) return undefined;
	try {
		const user = await Fetch<UserProps>(`/getUserInfoSlug/${slug}`, {
			headers: {
				Authorization: `Bearer ${session}`,
			},
		});
		console.log(user);
		return user;
	} catch (error) {
		console.log('Error user', error);
	}

	return undefined;
}

export async function getJobsBySlug(slug: string) {
	const session = await getToken('session');

	try {
		const response = await fetch(
			`http://127.0.0.1:8000/api/getJobsBySlug/${slug}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session}`,
				},
			}
		);
		const data = await response.json();
		return data.jobs;
	} catch (error) {
		console.log('Error user', error);
	}
}

export async function getWorkerChambas(slug: string) {
	const session = await getToken('session');
	try {
		const response = await fetch(
			`http://127.0.0.1:8000/api/user/${slug}/getWorkerChambas`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session}`,
					Accept: 'application/json',
				},
			}
		);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log('Error user', error);
	}
}
