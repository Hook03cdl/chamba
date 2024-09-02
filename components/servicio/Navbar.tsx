import { Camera, Mailbox } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
	return (
		<nav className="flex gap-5 items-center">
			<Link href={'/perfil'} className="flex gap-2">
				<Camera />
				Galería
			</Link>
			<Link href={'/perfil/solicitudes'} className="flex gap-2">
				<Mailbox />
				Solicitudes
				<div className="grid place-content-center size-5 rounded-full text-xs text-center bg-gray-300">
					<p>0</p>
				</div>
			</Link>
		</nav>
	);
}
