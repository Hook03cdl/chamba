import { fetchDataUser } from '@/lib/data/user';
import { UserCircle } from 'lucide-react';
import Link from 'next/link';
import { ToolTip } from './Tooltip';

/* eslint-disable @next/next/no-img-element */
export default async function Avatar() {
	const user = await fetchDataUser();
	return (
		<ToolTip
			delay={0.3}
			position={'bottom'}
			content={
				<div>
					<h3>Contenido</h3>
				</div>
			}
		>
			<Link
				href={'/perfil'}
				className="flex items-center gap-3 hover:bg-gray-200 rounded-lg transition-colors duration-300 p-1 px-2"
			>
				{user?.name && <h1 className="text-xl text-shark">{user.name}</h1>}
				{user?.src ? (
					<img
						src={'/images/notFound.png'}
						alt="user"
						className="size-12 rounded-full"
					/>
				) : (
					<UserCircle size={36} />
				)}
			</Link>
		</ToolTip>
	);
}
