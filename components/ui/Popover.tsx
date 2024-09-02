'use client';

import React, { MouseEvent, useEffect, useState } from 'react';

interface PopoverProps {
	fallback: React.ReactNode;
	children?: React.ReactNode;
}

export default function Popover({ fallback, children }: PopoverProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClickOut = (e: React.FocusEvent<HTMLButtonElement>) => {
		setIsOpen(false);
	};
	return (
		<div className={`relative`}>
			<button
				className="p-2 rounded-md hover:bg-gray-100 z-[-10]"
				onClick={() => setIsOpen(!isOpen)}
				onBlur={handleClickOut}
			>
				{fallback}
			</button>
			{isOpen && (
				<div className="absolute top-full right-0 mt-2 bg-humo border-2 border-gray-300 z-[+1] rounded-lg overflow-y-auto p-1">
					{children}
				</div>
			)}
		</div>
	);
}
