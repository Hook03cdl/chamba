import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-niagara-600 hover:bg-niagara-500 text-white',
				destructive: 'bg-red-600 hover:bg-red-600/80 text-white',
				outline: 'border border-shark bg-transparent hover:bg-gray-200',
				secondary: 'bg-gray-200 hover:bg-gray-300',
				cancel: 'bg-yellow-500 hover:bg-yellow-400 text-white',
				ghost: 'hover:bg-gray-200',
				link: 'hover:underline',
			},
			size: {
				default: 'px-4 py-3 h-fit',
				sm: 'h-9 rounded-md p-2',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
