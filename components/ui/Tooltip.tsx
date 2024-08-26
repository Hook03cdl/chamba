'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { useState } from 'react';

const tooltipVariants = cva(
	'absolute bg-black rounded-lg p-2 px-4 z-50 text-white',
	{
		variants: {
			variant: {
				top: 'absolute bottom-full left-1/2 -translate-x-1/2 mb-3 before:absolute before:top-full before:left-1/2 before:rotate-45 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-black before:size-3 before:z-[-1]',
				left: 'absolute top-1/2 right-full -translate-y-1/2 mr-3 before:absolute before:left-full before:top-1/2 before:rotate-45 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-black before:size-3 before:z-[-1]',
				right:
					'absolute top-1/2 left-full -translate-y-1/2 ml-3 before:absolute before:right-full before:top-1/2 before:rotate-45 before:translate-x-1/2 before:-translate-y-1/2 before:bg-black before:size-3 before:z-[-1]',
				bottom:
					'absolute top-full left-1/2 -translate-x-1/2 mt-3 before:absolute before:bottom-full before:left-1/2 before:rotate-45 before:-translate-x-1/2 before:translate-y-1/2 before:bg-black before:size-3 before:z-[-1]',
			},
		},
		defaultVariants: {
			variant: 'top',
		},
	}
);

interface TooltipProps extends VariantProps<typeof tooltipVariants> {
	children: React.ReactNode;
	content: string | React.ReactNode;
	className?: string;
	asChild?: boolean;
}

const ToolTip = React.forwardRef<HTMLDivElement, TooltipProps>(
	({ children, content, className, variant }, ref) => {
		const [isHover, setIsHover] = useState(false);
		return (
			<div
				className="relative"
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				ref={ref}
			>
				{children}
				{isHover && (
					<div className={cn(tooltipVariants({ variant, className }))}>
						{content}
					</div>
				)}
			</div>
		);
	}
);

ToolTip.displayName = 'Tooltip';

export { ToolTip, tooltipVariants };
