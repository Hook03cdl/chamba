import { UserCircle } from 'lucide-react';
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export default function Avatar() {
	const user = {
		name: '',
		src: '',
	};

	return (
		<Link
			href={'/perfil'}
			className="flex items-center gap-3 hover:bg-gray-100 rounded-lg transition-colors duration-300 p-1 px-2"
		>
			{user.name && <h1 className="text-sm text-shark">{user.name}</h1>}
			{user.src ? (
				<img
					src={'/images/notFound.png'}
					alt="user"
					className="size-12 rounded-full"
				/>
			) : (
				<UserCircle size={36} />
			)}
		</Link>
	);
}
