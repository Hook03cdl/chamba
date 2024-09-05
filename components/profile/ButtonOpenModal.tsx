'use client';

import { openModal } from '@/lib/hooks/useModal';
import { Button } from '../ui/button';
import FormHire from './FormHire';

export default function ButtonOpenModal({ text }: { text: string }) {
	return (
		<Button
			size={'sm'}
			className="px-5"
			onClick={() =>
				openModal({
					content: {
						header: 'Contratar',
						body: <FormHire />,
						addButton: <Button>Contratar</Button>,
					},
				})
			}
		>
			{text}
		</Button>
	);
}
