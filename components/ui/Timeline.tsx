'use client';

import { AtSign, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ToolTip } from './Tooltip';

export default function Timeline() {
	const pathname = usePathname();
	return (
		<div className="flex items-center gap-3 mb-20">
			<ToolTip content={'Cuenta'} variant={'bottom'}>
				<div className="bg-humo p-2 rounded-full">
					<AtSign size={15} strokeWidth={3} />
				</div>
			</ToolTip>
			<div className="h-[2px] bg-gray-300 w-14 rounded-full" />
			<ToolTip content={'Datos personales'} variant={'bottom'}>
				<div className="bg-humo p-2 rounded-full">
					<User size={15} strokeWidth={3} />
				</div>
			</ToolTip>
		</div>
	);
}
