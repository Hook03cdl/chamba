'use server';

import { Fetch } from '../Fetch';
import { getToken } from '../utils/tokens';

export async function editDataUser(formData: FormData) {
	const session = await getToken('session');
	// console.log(formData, session);

	try {
		const res = await Fetch('/updateProfile', {
			method: 'PUT',
			body: formData,
		});
		console.log(res);
	} catch (error) {
		console.error(error);
	}
}
