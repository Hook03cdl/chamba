'use server';

import { cookies } from 'next/headers';
import { UserProps } from '../interfaces/interface';
import { Fetch } from '../Fetch';

export async function fetchDataUser(): Promise<UserProps | undefined> {
	const cookie = cookies();
	const session = cookie.get('session');

	if (session?.value) {
		try {
			const user = await Fetch<UserProps>('/user', {
				headers: {
					Authorization: `Bearer ${session?.value}`,
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
	const cookie = cookies();
	const session = cookie.get('session');

	try {
		const response = await fetch('http://localhost:8000/api/user/showJobs', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${session?.value}`,
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Error user', error);
	}
	return undefined;
}
