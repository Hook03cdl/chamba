'use server';
import { cookies } from 'next/headers';
import { Fetch } from '../Fetch';
import { ChambaProps, JobProps } from '../interfaces/interface';
import { getToken } from '../utils/tokens';

export async function fetchDataChambasBySlug(
	slug: string
): Promise<ChambaProps[] | undefined> {
	try {
		const res = await fetch(`http://localhost:8000/api/chambas/${slug}`);
		const data = await res.json();
		return data.chamba;

		// return res?.chambas;
	} catch (error) {
		console.log(error);
		return undefined;
	}
}

export async function fetchDataChambas(): Promise<ChambaProps[] | undefined> {
	const cookie = cookies();
	const session = await getToken('session');
	try {
		const { chambas } = await Fetch<any>('/chamba', {
			headers: {
				Authorization: `Bearer ${session}`,
			},
		});

		return chambas;
	} catch (error) {
		console.log(error);
	}
	return undefined;
}
export async function fetchDataChamba(slug: string) {
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
	const cookie = cookies();
	const session = cookie.get('session');
	try {
		const { chambas } = await Fetch<any>('/mychambas', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${session?.value}`,
			},
		});
		return chambas;
	} catch (error) {
		console.log(error);
	}
	return undefined;
}
