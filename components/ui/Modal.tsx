/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from './button';
import Separator from './Separator';
import { closeModal, useModal } from '@/lib/hooks/useModal';

export default function Modal() {
	const { isOpen, modal } = useModal();

	const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target == e.currentTarget) {
			closeModal();
		}
	};

	return (
		<>
			{isOpen && (
				<div
					className="fixed inset-0 flex justify-center items-center bg-black/30 h-svh w-full px-24 py-12 overflow-y-auto"
					onClick={handleCloseModal}
				>
					{modal.content?.body && (
						<div className="bg-humo p-5 w-full max-w-4xl rounded-lg">
							<h3 className="text-3xl text-gray-400">{modal.content.header}</h3>
							<Separator />
							<div>{modal.content.body}</div>
							<Separator />
							<div className="flex justify-end gap-5">
								{modal.content.addButton && modal.content.addButton}
								<Button variant={'secondary'} onClick={closeModal}>
									Cancelar
								</Button>
							</div>
						</div>
					)}

					{modal?.image && (
						<img
							src={modal.image || '/images/notFound.png'}
							alt="Imagen"
							className="w-auto h-full object-cover object-center aspect-video"
						/>
					)}
				</div>
			)}
		</>
	);
}
