import React from 'react';
import Avatar from '../ui/Avatar';
import InputSearch from '../ui/Inputs';
import Notification from './Notification';

export default function Navbar() {
	return (
		<header className="sticky top-0">
			<nav className="flex justify-between items-center p-3 px-10 bg-humo">
				<InputSearch />
				<div className="flex gap-3 items-center">
					<Notification />
					<Avatar />
				</div>
			</nav>
		</header>
	);
}
