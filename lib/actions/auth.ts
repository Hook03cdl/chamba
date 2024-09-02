'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const AuthWhitPasswordAndEmail = async (formdata: FormData) => {
	let tokenAuth = '';
	const cookie = cookies();
	try {
		let res = await fetch('http://127.0.0.1:8000/api/login', {
			method: 'POST',
			body: formdata,
		});
		if (!res.ok) {
			throw new Error('Error en el servidors');
		}
		const data = await res.json();
		tokenAuth = data.token;
		cookie.set('session', tokenAuth);
		console.log(tokenAuth);
	} catch (error) {
		console.log('Auth', error);
	}
	redirect('/');
};

export async function getToken() {
	const cookie = cookies();

	console.log(cookie.get('session'));
}
export async function deleteToken() {
	const cookie = cookies();
	const session = cookie.get('session');
	try {
		await fetch('http://127.0.0.1:8000/api/logout', {
			headers: { Autorization: `${session?.value}` },
		});
		cookie.delete('session');
		console.log('Sesion eliminadas');
	} catch (error) {
		console.log(error);
	}
}
