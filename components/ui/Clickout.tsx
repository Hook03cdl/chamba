'use client';
import { useCallback, useEffect, useRef } from 'react';

export default function ClickOut({
	children,
	onClickout,
}: {
	children?: React.ReactNode;
	onClickout: (e: boolean) => void;
}) {
	const clickRef = useRef<HTMLDivElement | null>(null);

	const handleOutsideClick = useCallback(
		(event: MouseEvent) => {
			if (
				clickRef.current &&
				!clickRef.current.contains(event.target as Node)
			) {
				onClickout(true);
			}
		},
		[onClickout]
	);

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [handleOutsideClick]);
	return <div ref={clickRef}>{children}</div>;
}
