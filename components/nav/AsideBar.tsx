import Dropdown from '@/components/ui/Dropdown';
import Link from 'next/link';
import NavLink from './NavLink';
import Logo from '../ui/Logo';

export default function AsideBar() {
	return (
		<aside className="sticky top-0 left-0 overflow-y-auto flex flex-col items-center gap-24 w-72 h-screen bg-niagara-500 p-5 py-10">
			<div>
				<Logo />
			</div>
			<div className="h-full w-full flex flex-col gap-3">
				<Dropdown text="Menu">
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
				</Dropdown>
				<Dropdown text="Menu">
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
				</Dropdown>
				<Dropdown text="Menu">
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
				</Dropdown>
				<NavLink href="/" className="text-white bg-niagara-400">
					Opcion
				</NavLink>
			</div>
		</aside>
	);
}
