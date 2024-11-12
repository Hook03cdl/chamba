import { UserProps } from '@/lib/interfaces/interface';
/* eslint-disable @next/next/no-img-element */

export default function WorkerCard({ user }: { user: UserProps }) {
	return (
		<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-3">
			<div className="flex flex-col items-center gap-4">
				<img
					src={`https://ui-avatars.com/api/?rounded=true&name=${encodeURIComponent(
						user?.name
					)}`}
					alt={user.name}
					className="size-24 mt-4"
				/>
				<h5 className="mb-1 text-xl font-medium text-gray-500 line-clamp-1">
					{user.name}
				</h5>
				<p className="line-clamp-3">{user.about_me}</p>

				<a
					href={`/user/${user.slug}`}
					className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-niagara-700 rounded-lg"
				>
					Ver Perfil
				</a>
			</div>
		</div>
	);
}
