import { create } from 'zustand';

interface UseModalProps {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

export const useModal = create(() => ({
	isOpen: false,
}));

export const openModal = () => useModal.setState(() => ({ isOpen: true }));
export const closeModal = () => useModal.setState(() => ({ isOpen: false }));
