'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getToken, setToken } from '../utils/tokens';

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
		await setToken('session', user.token);
	} catch (error) {
		console.log(error);
		return;
	}
	redirect('/');
}

export async function getTokenP() {
	const cookie = cookies();

	console.log(cookie.get('session'));
}

export async function LogoutUser() {
	const cookie = cookies();
	const session = await getToken('session');
	console.log(session);

	try {
		const res = await fetch('http://127.0.0.1:8000/api/logout', {
			headers: { Authorization: `Bearer ${session}` },
		});
		cookie.delete('session');
		console.log(res);
	} catch (error) {
		console.log(error);
		return;
	}
	redirect('/');
}
