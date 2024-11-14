/* eslint-disable @next/next/no-img-element */
'use client';

import { useRouter } from 'next/navigation';
import { Button } from './button';
import Separator from './Separator';
import { closeModal, useModal } from '@/lib/hooks/useModal';
import { ChevronRight, X } from 'lucide-react';

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
					className="fixed inset-0 flex justify-center items-center bg-black/30 h-svh w-full px-24 py-12 overflow-y-auto transition-[height] z-50"
					onClick={handleCloseModal}
				>
					{modal.isblank ? (
						<div className="bg-humo p-5 w-full max-w-4xl rounded-lg">
							<h3 className="text-3xl text-gray-400">{modal.header}</h3>
							<Separator />
							<div>{modal.body}</div>
							<Separator />
							<div className="flex justify-end gap-5">
								{modal.addButton && modal.addButton}
								{modal.actionButton}
								<Button variant={'secondary'} onClick={closeModal}>
									Cancelar
								</Button>
							</div>
						</div>
					) : (
						<>{modal.body}</>
					)}
				</div>
			)}
		</>
	);
}

export function ModalIntercepting({
	children,
}: {
	children?: React.ReactNode;
}) {
	const route = useRouter();
	return (
		<div className="fixed h-svh w-full inset-0 bg-black/35 backdrop-blur grid place-content-center z-50">
			<div className="flex justify-end">
				<Button
					variant={'ghost'}
					onClick={() => {
						route.refresh();
					}}
				>
					Ver todo
					<span>
						<ChevronRight />
					</span>
				</Button>
			</div>
			{children}
			<div className="flex justify-center mt-20">
				<Button
					variant={'ghost'}
					onClick={() => {
						route.back();
					}}
				>
					<X size={30} />
				</Button>
			</div>
		</div>
	);
}
