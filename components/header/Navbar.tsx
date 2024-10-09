import Avatar from '../ui/Avatar';
import { InputSearch } from '../ui/Inputs';
import Logo from '../ui/Logo';
import Notification from './Notification';
import ButtonLinkSuscription from './ButtonLinkSuscription';

export default function Navbar() {
	return (
		<header className="sticky z-40 top-0 bg-humo">
			<div className="flex justify-between items-center p-3 px-10 shadow-md">
				<Logo size="small" variant="dark" />
				<InputSearch />
				<div className="flex gap-3 items-center">
					<ButtonLinkSuscription />
					<Notification />
					<Avatar />
				</div>
			</div>
		</header>
	);
}
