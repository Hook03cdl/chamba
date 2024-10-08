import { create } from 'zustand';

type ToastType = 'default' | 'success' | 'error' | 'warning';
export interface ContentToastProps {
	title: string;
	msg: string;
	type?: ToastType;
}

interface props {
	toasts: any[];
	addToast: (
		title: string,
		msg: string,
		type?: 'error' | 'success' | 'warning' | 'default'
	) => void;
	removeToast: (id: string) => void;
}
export const useToasts = create<props>((set) => ({
	toasts: [],
	addToast: (title, msg, type = 'default') =>
		set((state) => ({
			toasts: [...state.toasts, { id: Math.random(), title, msg, type }],
		})),
	removeToast: (id) =>
		set((state) => ({
			toasts: state.toasts.filter((toast) => toast.id !== id),
		})),
}));
