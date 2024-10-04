'use client';

import React, { useState } from 'react';
import ClickOut from './Clickout';

interface PopoverProps {
	fallback: React.ReactNode;
	children?: React.ReactNode;
}

export default function Popover({ fallback, children }: PopoverProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ClickOut onClickout={(isClickout) => setIsOpen(!isClickout)}>
			<div className={`relative`}>
				<button
					className="p-2 rounded-md hover:bg-gray-200 z-[-10]"
					onClick={() => setIsOpen(!isOpen)}
				>
					{fallback}
				</button>
				{isOpen && (
					<div className="absolute top-full right-0 mt-2 bg-humo border-2 border-gray-300 z-[+1] rounded-lg overflow-y-auto p-1">
						{children}
					</div>
				)}
			</div>
		</ClickOut>
	);
}
