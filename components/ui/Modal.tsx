/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from './button';
import Separator from './Separator';
import { closeModal, useModal } from '@/lib/hooks/useModal';

export default function Modal() {
	const { isOpen, modal } = useModal();
	if (isOpen) {
		return (
			<div
				className="fixed inset-0 flex justify-center items-center bg-black/30 h-svh w-full px-24 py-12 overflow-y-auto"
				onClick={closeModal}
			>
				{modal.body && (
					<div className="bg-humo p-5 min-w-96 rounded-lg">
						<h3 className="text-3xl text-gray-400">Titulo</h3>
						<Separator />
						<div>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
								nesciunt, aliquam libero eligendi hic quibusdam? Veritatis,
								neque eius, officiis saepe at explicabo nemo, autem alias
								delectus molestiae iusto sapiente reprehenderit.
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
				)}

				{modal.image && (
					<img
						src={modal.image || '/images/notFound.png'}
						alt=""
						className="w-auto h-full object-cover object-center aspect-video"
					/>
				)}
			</div>
		);
	}
	return;
}
