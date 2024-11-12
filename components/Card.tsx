/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { User } from 'lucide-react';

interface CardProps {
	src: string;
	id: string;
	worker_slug: string | null;
	name: string;
	description: string;
	worker_name: string;
	rating: number;
	job_name: string;
	href: string;
}

export default function Card({
	src,
	id,
	worker_slug,
	name,
	description,
	rating,
	worker_name,
	job_name,
	href,
}: CardProps) {
	return (
		<div className="transition ease-in-out delay-75 hover:-translate-y-2 hover:scale-20 duration-300 grid grid-rows-[1fr_auto] max-w-md h-full max-h-96 rounded-xl border border-gray-300 overflow-hidden shadow-md">
			<Link href={href}>
				<div>
					<img
						src={src || '/images/notFound.png'}
						alt={name}
						className="h-40 w-full object-cover"
					/>
					<div className="flex flex-col justify-between p-3">
						<h6 className="text-lg font-semibold line-clamp-1">{name}</h6>
						<span className="text-gray-400 text-xs py-0">{job_name}</span>
						<p className="text-balance line-clamp-3">{description}</p>
					</div>
				</div>
			</Link>
			<div className="flex space-x-2 justify-between items-center *:text-sm border-t-2 p-3">
				<Link
					href={`/user/${worker_slug}`}
					className="flex gap-2 hover:bg-niagara-100/60 rounded-md p-1"
				>
					<User size={16} />
					<p className="text-xs text-ellipsis font-normal text-slate-600">
						{worker_name}
					</p>
				</Link>
				<span className="bg-niagara-500/60 text-niagara-800 px-2 rounded-full font-semibold">
					{rating}
				</span>
			</div>
		</div>
	);
}
