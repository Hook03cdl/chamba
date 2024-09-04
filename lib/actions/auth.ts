'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import setTokens from '../utils/tokens';

export async function AuthWithPasswordAndEmail(formdata: FormData) {
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
	} catch (error) {
		console.log('Auth', error);
		return;
	}
	redirect('/');
}

export async function SingupWithPasswordAndEmail(formdata: FormData) {
	try {
		const res = await fetch('http://127.0.0.1:8000/api/register', {
			method: 'POST',
			body: formdata,
		});
		if (!res.ok) return;
		const user = await res.json();
		console.log(user);
		await setTokens('session', user.token);
	} catch (error) {
		console.log(error);
		return;
	}
	redirect('/');
}

export async function getToken() {
	const cookie = cookies();

	console.log(cookie.get('session'));
}

export async function LogoutUser() {
	const cookie = cookies();
	const session = cookie.get('session');
	try {
		await fetch('http://127.0.0.1:8000/api/logout', {
			headers: { Autorization: `Bearer ${session?.value}` },
		});
		cookie.delete('session');
		console.log('Sesion eliminadas');
	} catch (error) {
		cookie.delete('session');
		console.log(error);
	}
}
