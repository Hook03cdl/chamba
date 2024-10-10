'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export default function Slide({
	children,
	buttonContent,
}: {
	children: React.ReactNode;
	buttonContent: React.ReactElement;
}) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className=" flex items-center justify-between pr-20 gap-5">
			<div
				className={`px-10 ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform`}
			>
				{children}
			</div>
			<button onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <X /> : buttonContent}
			</button>
		</div>
	);
}
