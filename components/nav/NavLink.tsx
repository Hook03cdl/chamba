'use client';

import Link, { LinkProps } from 'next/link';

interface NavLinkProps extends LinkProps {
	className?: string;
	href: string;
	children?: React.ReactNode;
}

export default function NavLink({
	className,
	children,
	href,
	...props
}: NavLinkProps) {
	return (
		<Link
			href={href}
			className={`p-2 rounded-md hover:bg-niagara-600 text-white ${className}`}
			{...props}
		>
			{children}
		</Link>
	);
}
