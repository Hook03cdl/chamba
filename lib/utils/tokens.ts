import { cookies } from 'next/headers';

export async function setToken(key: string, value: string) {
	const cookieStore = cookies();
	cookieStore.set(key, value);
}

export async function getToken(key: string): Promise<string | undefined> {
	const cookieStore = cookies();
	const token = cookieStore.get(key);
	if (token) {
		return token?.value;
	}
	return undefined;
}
