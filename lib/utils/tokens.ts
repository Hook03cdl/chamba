import { cookies } from 'next/headers';

export default async function setTokens(key: string, value: string) {
	const cookieStore = cookies();
	cookieStore.set(key, value);
}
