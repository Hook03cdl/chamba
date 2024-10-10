import Avatar from '../ui/Avatar';
import { InputSearch } from '../ui/Inputs';
import Logo from '../ui/Logo';
import Notification from './Notification';
import Link from 'next/link';
import { getToken } from '@/lib/utils/tokens';
import { Gem } from 'lucide-react';

export default async function Navbar() {
	const session = await getToken('session');
	return (
		<header className="sticky z-40 top-0 bg-humo">
			<div className="flex justify-between items-center p-3 px-10 shadow-md">
				<Logo size="small" variant="dark" />
				<InputSearch />
				{/* <NavChambas /> */}
				<div className="flex gap-3 items-center">
					{session && (
						<Link href={'/suscribirse'} className="text-gray-600">
							<Gem size={28} />
						</Link>
					)}
					<Notification />
					<Avatar />
				</div>
			</div>
		</header>
	);
}
