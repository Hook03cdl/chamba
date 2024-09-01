import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import * as React from 'react';

const toastVariant = cva(
	'relative flex gap-4  max-w-xl w-full bg-gray-200 p-3 overflow-hidden shadow-5xl',
	{
		variants: {
			variant: {
				default: 'shadow-gray-600',
				success: 'shadow-green-600',
				error: 'shadow-red-600',
				warn: 'shadow-yellow-600',
			},
		},
		defaultVariants: { variant: 'default' },
	}
);

interface ToastProps extends VariantProps<typeof toastVariant> {
	title: string;
	description: string;
	className?: string;
	fallback?: React.ReactNode;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
	({ className, title, description, fallback, variant }, ref) => {
		return (
			<div className={cn(toastVariant({ className, variant }))}>
				<div>
					<h3 className="font-semibold">{title}</h3>
					<p>{description}</p>
					{fallback}
				</div>
				<button>
					<X />
				</button>
			</div>
		);
	}
);

Toast.displayName = 'Toast';

export { Toast, VariantProps };
