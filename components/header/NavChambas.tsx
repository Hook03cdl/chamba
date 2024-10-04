'use client';

import { usePathname } from 'next/navigation';
import Each from '../Each';
import { Button } from '../ui/button';

interface ChambasOptionsProps {
	chambas: string[];
}

export default function NavChambas({ chambas }: ChambasOptionsProps) {
	const path = usePathname();

	return (
		<nav
			className={`flex gap-3 bg-humo  ${
				path.includes('/perfil') ? 'h-0 overflow-y-hidden' : ' h-16 py-3'
			}`}
		>
			<Button variant={'outline'} size={'sm'}>
				Todos
			</Button>
			<Each
				of={chambas}
				render={(chamba) => (
					<Button variant={'outline'} size={'sm'}>
						{chamba}
					</Button>
				)}
			/>
		</nav>
	);
}
