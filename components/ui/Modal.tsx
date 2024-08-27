'use client';

import { X } from 'lucide-react';
import { Button } from './button';
import Separator from './Separator';
import { closeModal, useModal } from '@/hooks/useModal';

export default function Modal() {
	const { isOpen } = useModal();
	if (isOpen) {
		return (
			<div className="fixed inset-0 grid place-content-center bg-black/30 h-svh w-full p-24 overflow-y-auto">
				<div className="bg-humo p-5 min-w-96 rounded-lg">
					<h3 className="text-3xl text-gray-400">Titulo</h3>
					<Separator />
					<div>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
							nesciunt, aliquam libero eligendi hic quibusdam? Veritatis, neque
							eius, officiis saepe at explicabo nemo, autem alias delectus
							molestiae iusto sapiente reprehenderit.
						</p>
					</div>
					<Separator />
					<div className="flex justify-end gap-5">
						<Button variant={'secondary'} onClick={closeModal}>
							Cancelar
						</Button>
						<Button>Aceptar</Button>
					</div>
				</div>
			</div>
		);
	}
	return;
}
