import { useToasts } from '@/lib/hooks/useToast';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import * as React from 'react';

const toastVariant = cva(
	'relative flex gap-4 min-w-96 w-full max-w-xl bg-gray-200 p-3 overflow-hidden shadow-5xl',
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

export interface ToastProps extends VariantProps<typeof toastVariant> {
	id?: string;
	title: string;
	description: string;
	className?: string;
	type?: 'error' | 'success' | 'warning' | 'default';
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
	({ id, className, title, description, variant }, ref) => {
		const { removeToast } = useToasts();
		return (
			<div className={cn(toastVariant({ className, variant }))} ref={ref}>
				<div className="grow">
					<h3 className="font-semibold">{title}</h3>
					<p>{description}</p>
				</div>
				{id && (
					<button onClick={() => removeToast(id)}>
						<X />
					</button>
				)}
			</div>
		);
	}
);

Toast.displayName = 'Toast';

export { Toast, VariantProps };
