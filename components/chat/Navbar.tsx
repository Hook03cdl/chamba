'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Navbar() {
	const route = useRouter();
	const params = useSearchParams();
	const user = params.get('user');

	return (
		<header className="flex justify-between items-center py-5 px-10 shadow-md">
			<button onClick={() => route.back()} className="flex gap-2 items-center">
				<ChevronLeft size={28} />
				<span>Regresar</span>
			</button>
			<h2 className="text-xl">{user} </h2>
		</header>
	);
}
