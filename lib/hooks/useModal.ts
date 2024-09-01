import React from 'react';
import { create } from 'zustand';
interface ModalProps {
	isOpen: boolean;
	modal: {
		header?: string | React.ReactNode;
		body?: React.ReactNode;
		image?: string;
		addButton?: React.ReactElement;
	};
}
export const useModal = create<ModalProps>(() => ({
	isOpen: false,
	modal: { header: '', body: null, image: 'body' },
}));

export const openModal = ({
	header,
	body,
	image,
	addButton,
}: {
	header?: string;
	body?: React.ReactNode;
	addButton?: React.ReactElement;
	image?: string;
}) => {
	document.body.classList.add('overflow-hidden');
	useModal.setState(() => ({
		isOpen: true,
		modal: { header, body, addButton, image },
	}));
};

export const closeModal = () => {
	document.body.classList.remove('overflow-hidden');
	useModal.setState(() => ({ isOpen: false }));
};
