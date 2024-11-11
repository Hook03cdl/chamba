'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getToken, setToken } from '../utils/tokens';

export async function AuthWithPasswordAndEmail(formdata: FormData) {
	const cookie = cookies();
	try {
		const res = await fetch('http://127.0.0.1:8000/api/login', {
			method: 'POST',
			body: formdata,
		});
		if (!res.ok) {
			throw new Error('Error en el servidor');
		}
		const data = await res.json();
		cookie.set('session', data.token);

		// Devuelve true para indicar éxito
		return { success: true };
	} catch (error) {
		console.error('Auth error:', error);
		return { success: false, error: true };
	}
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

	try {
		const res = await fetch('http://127.0.0.1:8000/api/logout', {
			headers: { Authorization: `Bearer ${session}` },
		});
		cookie.delete('session');
	} catch (error) {
		console.log(error);
		return;
	}
	redirect('/');
}
