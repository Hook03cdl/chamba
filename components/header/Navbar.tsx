import Avatar from '../ui/Avatar';
import { InputSearch } from '../ui/Inputs';
import Logo from '../ui/Logo';
// import DropdownMenu from './DropdownMenu';
import Notification from './Notification';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Navbar() {
	return (
		<header className="sticky top-0 bg-humo">
			<div className="flex justify-between items-center p-3 px-10 shadow-md z-40">
				<Logo size="small" variant="dark" />
				<InputSearch />
				<div className="flex gap-3 items-center">
					<Button>
						<Link href={"/suscribirse"}>Suscribirse</Link>
					</Button>
					<Notification />
					<Avatar />
				</div>
			</div>
		</header>
	);
}
