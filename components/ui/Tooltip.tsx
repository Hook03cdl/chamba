'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { useState, useEffect, forwardRef, useCallback } from 'react';

const tooltipVariants = cva(
	'absolute bg-black rounded-lg p-2 px-4 z-50 text-white text-xs',
	{
		variants: {
			position: {
				top: 'absolute bottom-full left-1/2 -translate-x-1/2 mb-3 before:absolute before:top-full before:left-1/2 before:rotate-45 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-black before:size-3 before:z-[-1]',
				left: 'absolute top-1/2 right-full -translate-y-1/2 mr-3 before:absolute before:left-full before:top-1/2 before:rotate-45 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-black before:size-3 before:z-[-1]',
				right:
					'absolute top-1/2 left-full -translate-y-1/2 ml-3 before:absolute before:right-full before:top-1/2 before:rotate-45 before:translate-x-1/2 before:-translate-y-1/2 before:bg-black before:size-3 before:z-[-1]',
				bottom:
					'absolute top-full left-1/2 -translate-x-1/2 mt-3 before:absolute before:bottom-full before:left-1/2 before:rotate-45 before:-translate-x-1/2 before:translate-y-1/2 before:bg-black before:size-3 before:z-[-1]',
			},
		},
		defaultVariants: {
			position: 'top',
		},
	}
);

interface TooltipProps extends VariantProps<typeof tooltipVariants> {
	children?: React.ReactNode;
	content?: string | React.ReactNode;
	className?: string;
	delay?: number;
}

const ToolTip = forwardRef<HTMLDivElement, TooltipProps>(
	({ children, content, className, position, delay = 0 }, ref) => {
		const [isHover, setIsHover] = useState(false);
		const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout | null>(null);
		const handleDelay = () => {
			const id = setTimeout(() => setIsHover(true), 1000 * delay);
			setTimeOutId(id);
		};

		const handleClearDelay = () => {
			if (timeOutId) {
				setIsHover(false);
				clearTimeout(timeOutId);
				setTimeOutId(null);
			}
		};
		return (
			<div
				className="relative"
				onMouseEnter={handleDelay}
				onMouseLeave={handleClearDelay}
				ref={ref}
			>
				{children}
				{isHover && (
					<div className={cn(tooltipVariants({ position, className }))}>
						{content}
					</div>
				)}
			</div>
		);
	}
);

ToolTip.displayName = 'Tooltip';

export { ToolTip, tooltipVariants };
