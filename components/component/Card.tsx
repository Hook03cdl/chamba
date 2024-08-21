/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

interface CardProps {
	src: string;
	title: string;
	description: string;
	price: string;
	rating: number;
	href: string;
}

export default function Card({
	src,
	title,
	description,
	price,
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
					alt=""
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="flex flex-col justify-between s p-3">
				<h6 className="text-lg font-semibold">Titulo</h6>
				<p className="text-balance line-clamp-3">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
					incidunt laborum aspernatur quo nam beatae. Illum, mollitia eligendi
					sit iusto laborum dolor, in atque quo neque, saepe ab numquam
					possimus.
				</p>
				<div className="flex justify-between *:text-sm">
					<span>$000</span>
					<span className="bg-niagara/60 px-2 rounded-full">{rating}</span>
				</div>
			</div>
		</Link>
	);
}
