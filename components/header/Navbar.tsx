import { usePathname } from 'next/navigation';
import Avatar from '../ui/Avatar';
import { InputSearch } from '../ui/Inputs';
import Logo from '../ui/Logo';
import Notification from './Notification';
import NavChambas from './NavChambas';

export default function Navbar() {
	return (
		<header className="sticky top-0 bg-humo">
			<div className="flex justify-between items-center p-3 px-10 shadow-md">
				<Logo size="small" variant="dark" />
				<InputSearch />
				<div className="flex gap-3 items-center">
					<Notification />
					<Avatar />
				</div>
			</div>
		</header>
	);
}
