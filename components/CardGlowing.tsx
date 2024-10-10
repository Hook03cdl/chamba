'use client';

import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import Each from './Each';

export interface CardGlowingProps {
	title: string;
	price: string;
	benefics: string[];
	href: string;
}
export default function CardGlowing({
	benefics,
	href,
	price,
	title,
}: CardGlowingProps) {
	const route = useRouter();
	return (
		<div
			className={`relative flex flex-col justify-between flex-1  min-w-96 p-6  gap-10 text-humo bg-shark border
				border-humo/90 rounded-2xl hover:shadow-humo hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out`}
		>
			<div className="space-y-1">
				<h2 className="font-semibold text-humo">{title}</h2>
				<p className="text-3xl text-humo font-bold">${price}</p>
			</div>
			<ul className="grid grid-cols-2 gap-4">
				<Each
					of={benefics}
					render={(benefic) => (
						<li className="flex gap-2 items-center">
							<span className="text-niagara-600">
								<Check size={18} />
							</span>
							{benefic}
						</li>
					)}
				/>
			</ul>
			<Button
				onClick={() => {
					route.push(href);
				}}
			>
				Empezar
			</Button>
		</div>
	);
}
