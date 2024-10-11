'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface ActiveLinkProps {
	children?: React.ReactNode;
	key?: string | number;
	href: string;
}

export default function ActiveLink({ href, ...props }: ActiveLinkProps) {
	const searchParams = useSearchParams();
	const isActive =
		(!searchParams.toString() && href === '/') ||
		searchParams.toString().includes(href.split('?')[1]);

	return (
		<Link
			className={`text-nowrap ${isActive ? 'underline' : 'hover:underline'}`}
			{...props}
			href={href}
		/>
	);
}
