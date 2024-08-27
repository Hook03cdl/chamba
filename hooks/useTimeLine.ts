import { create } from 'zustand';

export const useTimeLine = create(() => ({
	section: 0,
}));

export const navigate = (position: number) =>
	useTimeLine.setState(() => ({ section: position }));

export const next = (max: number) =>
	useTimeLine.setState((state) => {
		if (state.section < max) {
			return { section: state.section + 1 };
		}
		return state;
	});

export const back = () =>
	useTimeLine.setState((state) => {
		if (state.section > 0) {
			return { section: state.section - 1 };
		}
		return state;
	});
