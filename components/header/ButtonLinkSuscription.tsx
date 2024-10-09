'use client';

import { Gem } from 'lucide-react';
import { Button } from '../ui/button';
import { ToolTip } from '../ui/Tooltip';
import { useRouter } from 'next/navigation';

export default function ButtonLinkSuscription() {
	const route = useRouter();

	const handleClickNavigate = () => {
		document.body.classList.add('overflow-hidden');
		route.push('/suscribirse');
	};
	return (
		<ToolTip content={'Planes'} position={'bottom'} delay={1}>
			<Button
				variant={'none'}
				size={'none'}
				className="text-gray-600"
				onClick={handleClickNavigate}
			>
				<Gem size={30} />
			</Button>
		</ToolTip>
	);
}
