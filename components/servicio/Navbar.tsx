'use client';

import { Camera, Mailbox } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
	const path = usePathname();

	return (
		<nav className="flex gap-5 items-center">
			<Link href={'/perfil'} className="flex flex-col items-center">
				<div className={`flex items-center gap-2 pb-1`}>
					<Camera />
					Galería
				</div>
				<div
					className={`h-[2px] ${
						path == '/perfil' ? ' w-full bg-niagara-400' : 'w-0'
					} transition-[width] duration-300`}
				/>
			</Link>
			<Link href={'/perfil/solicitudes'} className="flex flex-col items-center">
				<div className={`flex items-center gap-2 pb-1`}>
					<Mailbox />
					Solicitudes
					<div className="grid place-content-center size-5 rounded-full text-xs text-center bg-gray-300">
						<p>0</p>
					</div>
				</div>
				<div
					className={`h-[2px] ${
						path == '/perfil/solicitudes' ? 'w-full bg-niagara-400' : 'w-0'
					} transition-[width] duration-300`}
				/>
			</Link>
		</nav>
	);
}
