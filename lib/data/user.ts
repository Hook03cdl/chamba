'use server';

import { UserProps } from '../interfaces/interface';
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

export async function fetchJobsUser() {
	const session = await getToken('session');

	try {
		const response = await fetch('http://localhost:8000/api/user/showJobs', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${session}`,
			},
		});

		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Error user', error);
	}
	return undefined;
}
