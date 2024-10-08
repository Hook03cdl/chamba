'use client';

import { LogoutUser } from '@/lib/actions/auth';
import { LogOut } from 'lucide-react';

export default function ButtonLogout({
	text = 'Cerrar sesion',
}: {
	text?: string;
}) {
	return (
		<button
			onClick={async () => {
				await LogoutUser();
			}}
			className="flex w-full gap-4 items-center hover:bg-gray-200 p-2 rounded-md"
		>
			<LogOut />
			<span className="text-nowrap">{text}</span>
		</button>
	);
}
