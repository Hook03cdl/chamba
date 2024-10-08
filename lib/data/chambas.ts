import { cookies } from 'next/headers';
import { Fetch } from '../Fetch';
import { ChambaProps } from '../interfaces/interface';
import { getToken } from '../utils/tokens';

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
		console.log(chambas);
		return chambas;
	} catch (error) {
		console.log(error);
	}
	return undefined;
}
