'use client';

import { Camera, Mailbox } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Each from '../Each';
import { Button } from '@/components/ui/button';

interface NavbarProps {
	navOptions: {
		href: string;
		icon?: React.ReactElement;
		text: string;
		body?: React.ReactNode;
		display: boolean;
	}[];
}

export default function Navbar({ navOptions }: NavbarProps) {
	const path = usePathname();

	return (
		<nav className="flex gap-5 items-center">
			<Each
				of={navOptions}
				render={(l: any) => (
					l.display && (
						<Link href={l.href} className="flex flex-col items-center">
							<div className={`flex items-center gap-2 pb-1`}>
								{l.icon}
								{l.text}
								{l.body}
							</div>
							<div
								className={`h-[2px] ${
									path == l.href ? ' w-[110%] bg-niagara-400' : 'w-0'
								} transition-[width] duration-300`}
							/>
						</Link>
					)
				)}
			/>
		</nav>
	);
}
