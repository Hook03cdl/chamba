'use server';

import { cookies } from 'next/headers';

export async function fetchDataUser(): Promise<any | undefined> {
	const cookie = cookies();
	const session = cookie.get('session');

	if (session?.value) {
		try {
			await fetch('http://localhost:8000/api/user', {
				headers: {
					authorization: `bearer ${session?.value}`,
				},
			}).then((data) => console.log(data));
		} catch (error) {
			console.log('Error user', error);
		}
	}

	return undefined;
}
