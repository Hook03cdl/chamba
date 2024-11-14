'use client';

import { Button } from '@/components/ui/button';
import { openModal } from '@/lib/hooks/useModal';
import ButtonSubmit from '../ui/ButtonSubmit';
import FormPersonalData from '../signup/FormPersonalData';

export default function ButtonEditProfile() {
	return (
		<Button
			size={'sm'}
			className="px-5"
			onClick={() =>
				openModal({
					header: 'Editar Perfil',
					body: (
						<div className="grid place-content-center">
							<FormPersonalData idForm="editUser" />
						</div>
					),
					addButton: (
						<ButtonSubmit form="editUser">Guardar cambios</ButtonSubmit>
					),
				})
			}
		>
			Editar perfil
		</Button>
	);
}
