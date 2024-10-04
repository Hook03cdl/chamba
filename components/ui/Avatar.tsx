import { fetchDataUser } from '@/lib/data/user';
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
				className=" grid rounded-full hover:bg-niagara-200 p-1 overflow-hidden"
			>
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
			</Link>
		</ToolTip>
	);
}
