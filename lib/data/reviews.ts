'use server';

import { Fetch } from '../Fetch';
import { ReviewsProps } from '../interfaces/interface';
import { getToken } from '../utils/tokens';

export default async function fetchReviewsData(id?: string | number) {
	const session = await getToken('session');

	try {
		if (!session) return undefined;
		const { reviews } = await Fetch<any>(`/reviews/${id}`, {
			headers: { Authorization: `Bearer ${session}` },
		});
		return reviews;
	} catch (error) {
		console.log(error);
	}
	return undefined;
}
