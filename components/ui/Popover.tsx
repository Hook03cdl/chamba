'use client';

import React, { Children, useEffect, useRef, useState } from 'react';
import ClickOut from './Clickout';
import Link from 'next/link';

interface PopoverProps {
	fallback?: React.ReactNode;
	children?: React.ReactNode;
	className?: string;
	isOpen?: boolean;
}

interface ChildProps {
	onClick?: () => void;
}

export default function Popover({
	fallback,
	children,
	className,
	isOpen: controlledIsOpen,
}: PopoverProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsOpen(false);
	};

	useEffect(() => {
		if (controlledIsOpen !== undefined) {
			setIsOpen(controlledIsOpen);
		}
	}, [controlledIsOpen]);

	return (
		<ClickOut onClickout={(isClickout) => setIsOpen(!isClickout)}>
			<div className={`relative`}>
				<button className={className} onClick={() => setIsOpen(!isOpen)}>
					{fallback}
				</button>
				{isOpen && (
					<div
						onClick={handleClick}
						className="absolute top-full right-0 mt-2 bg-humo border-2 border-gray-300 z-[+1] rounded-lg overflow-y-auto p-1"
					>
						{Children.map(children, (child) => {
							return React.cloneElement(child as React.ReactElement, {
								onClick: handleClick,
							});
						})}
					</div>
				)}
			</div>
		</ClickOut>
	);
}

export function PopButton({
	children,
	onClick,
}: {
	children: React.ReactNode;
	onClick: () => void;
}) {
	const handleClick = () => {
		onClick();
	};
	return (
		<button
			className="flex gap-4 items-center hover:bg-gray-200 p-2 rounded-md"
			onClick={handleClick}
		>
			{children}
		</button>
	);
}
export function PopLink({
	children,
	href,
}: {
	children?: React.ReactNode;
	href: string;
}) {
	return (
		<Link
			href={href}
			className="flex gap-4 items-center hover:bg-gray-200 p-2 rounded-md"
		>
			{children}
		</Link>
	);
}
