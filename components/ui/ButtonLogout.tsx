'use client';

import { LogoutUser } from '@/lib/actions/auth';
import { closeModal, openModal } from '@/lib/hooks/useModal';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ButtonLogout({
	text = 'Cerrar sesion',
}: {
	text?: string;
}) {
	const route = useRouter();
	return (
		<button
			onClick={async () => {
				openModal({
					body: (
						<div className="grid place-content-center">
							<div className="size-20 rounded-full border-2 border-niagara-600 border-t-transparent animate-spin" />
							<h1 className="text-humo">Cerrando session</h1>
						</div>
					),
					isblank: true,
				});
				const res = await LogoutUser();
				if (res.ok) {
					route.refresh();
					closeModal();
				}
			}}
			className="flex w-full gap-4 items-center hover:bg-gray-200 p-2 rounded-md"
		>
			<LogOut />
			<span className="text-nowrap">{text}</span>
		</button>
	);
}
