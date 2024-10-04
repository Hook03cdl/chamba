/* eslint-disable @next/next/no-img-element */

import { ReviewsProps } from '@/lib/interfaces/interface';

export default function Review({ rating, comment, client_name }: ReviewsProps) {
	return (
		<div className="border border-gray-300 rounded-md p-4">
			<div className="flex flex-row gap-2 items-center mb-2">
				<img
					src={`https://ui-avatars.com/api/?rounded=true&name=${client_name}`}
					alt="Client Photo"
					width={40}
					height={40}
				/>
				<span className="font-bold">{client_name}</span>
				<span>{rating}</span>
			</div>
			<p className="text-sm text-shark">{comment}</p>
		</div>
	);
}
