/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

interface CardProps {
	src: string;
	name: string;
	description: string;

	rating: number;
	href: string;
}

export default function Card({
	src,
	name,
	description,
	rating,
	href,
}: CardProps) {
	return (
		<Link
			href={href}
			className="grid grid-rows-2 max-w-64 h-96 rounded-xl border border-gray-300 overflow-hidden shadow-md"
		>
			<div className="w-full h-full">
				<img
					src={src || '/images/notFound.png'}
					alt={name}
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="flex flex-col justify-between s p-3">
				<h6 className="text-lg font-semibold">{name}</h6>
				<p className="text-balance line-clamp-3">{description}</p>
				<div className="flex justify-end *:text-sm">
					<span className="bg-niagara-500/60 px-2 rounded-full text-shark">
						{rating}
					</span>
				</div>
			</div>
		</Link>
	);
}
