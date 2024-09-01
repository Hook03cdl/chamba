'use client';

import { useState } from 'react';

interface PopoverProps {
	fallback: React.ReactNode;
	children?: React.ReactNode;
}

export default function Popover({ fallback, children }: PopoverProps) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={`relative `}>
			<button
				className="p-2 rounded-md hover:bg-gray-100"
				onClick={() => setIsOpen(!isOpen)}
			>
				{fallback}
			</button>
			{isOpen && (
				<div className="absolute top-full right-0 mt-2 bg-humo border-2 border-gray-300 z-[+1] rounded-lg overflow-y-auto p-3">
					{children}
				</div>
			)}
		</div>
	);
}
