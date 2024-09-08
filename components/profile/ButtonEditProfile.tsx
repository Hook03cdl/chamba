'use client';

import { Button } from '@/components/ui/button';
import { openModal } from '@/lib/hooks/useModal';
import Personal from '@/components/signup/Personal';

export default function ButtonEditProfile() {
	return (
		<Button
			size={'sm'}
			className="px-5"
			onClick={() =>
				openModal({
					content: {
						header: 'Editar Perfil',
						body: (
							<div className="grid place-content-center">
								<Personal idForm="editUser" />
							</div>
						),
						addButton: (
							<Button type="submit" form="editUser">
								Guardar cambios
							</Button>
						),
					},
				})
			}
		>
			Editar perfil
		</Button>
	);
}
