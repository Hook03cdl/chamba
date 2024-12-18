'use server';
import { cookies } from 'next/headers';
import { Fetch } from '../Fetch';
import { ChambaProps } from '../interfaces/interface';
import { getToken } from '../utils/tokens';

export async function fetchDataChambasBySlug(
	slug: string
): Promise<ChambaProps[] | undefined> {
	const session = await getToken('session');
	try {
		const response = await fetch(`http://127.0.0.1:8000/api/chambas/${slug}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${session}`,
				Accept: 'application/json',
			},
		});
		const { chambas } = await response.json();
		if (chambas.length > 0) {
			return chambas;
		}
		return undefined;
	} catch (error) {
		console.log(error);
		return undefined;
	}
}

export async function fetchDataChambas(): Promise<ChambaProps[] | undefined> {
	const cookie = cookies();
	const session = await getToken('session');
	try {
		const response = await fetch('http://127.0.0.1:8000/api/chamba');
		// console.log(response);
		if (!response.ok) return undefined;

		const chambas = await response.json();
		return chambas;
	} catch (error) {
		console.log(error);
		return undefined;
	}
}

export async function fetchDataChamba(
	slug: string
): Promise<ChambaProps | undefined> {
	const cookie = cookies();
	const session = cookie.get('session');

	try {
		const { chamba } = await Fetch<any>(`/chamba/${slug}`, {
			headers: {
				Authorization: `Bearer ${session?.value}`,
			},
		});

		return chamba;
	} catch (error) {
		console.log(error);
	}
	return undefined;
}

export async function fetchDataChambasWorker() {
	const session = await getToken('session');
	try {
		const response = await fetch('http://127.0.0.1:8000/api/mychambas', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${session}`,
				Accept: 'application/json',
			},
		});
		const data = await response.json();
		return data.chambas;
	} catch (error) {
		console.log(error);
	}
	return undefined;
}

export async function fetchUserFollowingChambas() {
	const session = await getToken('session');

	try {
		const response = await fetch(
			'http://127.0.0.1:8000/api/user/getUserFollowingChambas',
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${session}`,
					Accept: 'application/json',
				},
			}
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchMostRatedChambas() {
	const session = await getToken('session');
	try {
		const response = await fetch('http://127.0.0.1:8000/api/mostRatedChambas', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${session}`,
				Accept: 'application/json',
			},
		});
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
		return undefined;
	}
}
