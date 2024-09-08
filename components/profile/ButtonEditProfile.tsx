'use client';

import { Button } from '@/components/ui/button';
import { openModal } from '@/lib/hooks/useModal';
import ButtonSubmit from '../ui/ButtonSubmit';
import FormPersonalData from '../signup/FormPersonalData';
import { useState } from 'react';

export default function ButtonEditProfile() {
	const [isLoading, setIsLoading] = useState(false);

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		// Aquí va tu lógica de envío del formulario
		setIsLoading(false);
	};
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
								<FormPersonalData idForm="editUser" />
							</div>
						),
						addButton: (
							<ButtonSubmit form="editUser">Guardar cambios</ButtonSubmit>
						),
					},
				})
			}
		>
			Editar perfil
		</Button>
	);
}
