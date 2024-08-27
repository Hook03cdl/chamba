import { create } from 'zustand';

export const useModal = create(() => ({
	isOpen: false,
}));

export const openModal = () => useModal.setState(() => ({ isOpen: true }));
export const closeModal = () => useModal.setState(() => ({ isOpen: false }));
