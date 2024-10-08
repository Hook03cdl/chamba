import { fetchDataUser } from '@/lib/data/user';
import Link from 'next/link';
import { ChartArea, User } from 'lucide-react';
import Popover, { PopLink } from './Popover';
import ButtonLogout from './ButtonLogout';

/* eslint-disable @next/next/no-img-element */
export default async function Avatar() {
	const user = await fetchDataUser();

	if (!user) {
		return (
			<>
				<Link
					href={'/login'}
					className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
				>
					Iniciar sesion
				</Link>
			</>
		);
	}

	return (
		<Popover
			fallback={
				<div className=" grid rounded-full hover:bg-niagara-200 p-1 overflow-hidden">
					{user?.src ? (
						<img
							src={user.src}
							alt={user?.name}
							className="size-12 rounded-full"
						/>
					) : (
						<img
							src={
								user?.name
									? `https://ui-avatars.com/api/?rounded=true&name=${encodeURIComponent(
											user?.name
									  )}`
									: '/images/notFound.png'
							}
							alt={user?.name}
							className="size-10"
						/>
					)}
				</div>
			}
		>
			{user.role == '1' && (
				<PopLink href={'/dashboard'}>
					<ChartArea />
					<span className="text-nowrap">Panel de Control</span>
				</PopLink>
			)}
			<PopLink href="/perfil">
				<User />
				Perfil
			</PopLink>
			<ButtonLogout />
		</Popover>
	);
}
