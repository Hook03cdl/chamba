'use server';

export async function getUser(): Promise<any | undefined> {
	const user = await fetch('http://localhost:8000/api');
	console.log(user);

	if (user) {
		return user;
	}
	return undefined;
}
