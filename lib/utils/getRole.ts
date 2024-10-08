'use server';

import { fetchDataUser } from '../data/user';

export default async function getRole(): Promise<string | undefined> {
	const user = await fetchDataUser();
	if (!user) return undefined;

	return user.role;
}
