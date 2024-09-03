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
