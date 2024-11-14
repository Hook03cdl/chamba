import React from 'react';
import { create } from 'zustand';
interface ModalProps {
	isOpen: boolean;
	modal: ContentModalProps;
}
interface ContentModalProps {
	header?: string | React.ReactNode;
	body: React.ReactNode;
	addButton?: React.ReactElement;
	actionButton?: React.ReactNode;
	isblank?: boolean;
}
export const useModal = create<ModalProps>(() => ({
	isOpen: false,
	modal: { header: '', body: null, actionButton: null },
}));

export const openModal = ({
	header,
	body,
	actionButton,
}: ContentModalProps) => {
	document.body.classList.add('overflow-hidden');
	useModal.setState(() => ({
		isOpen: true,
		modal: { header, body, actionButton },
	}));
};

export const closeModal = () => {
	document.body.classList.remove('overflow-hidden');
	useModal.setState(() => ({ isOpen: false }));
};
