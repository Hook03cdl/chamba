'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface DropdownProps {
	text: string;
	children?: React.ReactNode;
}
export default function Dropdown({ text, children }: DropdownProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className="bg-niagara-400 rounded-lg">
			<button
				className="bg-niagara-400 p-2 w-full flex justify-between items-center rounded-md shadow-lg"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className="text-white">{text}</span>
				<span>
					{isOpen ? <ChevronUp color="#fff" /> : <ChevronDown color="#fff" />}
				</span>
			</button>
			<div
				className={`grid gap-1 ${
					isOpen ? 'h-auto py-3' : 'h-0'
				} overflow-hidden`}
			>
				{children}
			</div>
		</div>
	);
}
