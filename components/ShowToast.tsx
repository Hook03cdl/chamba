'use client';

import React, { useEffect } from 'react';
import { useToasts } from '@/lib/hooks/useToast';
import Each from './Each';
import { Toast } from './ui/Toast';

export default function ShowToasts() {
	const { toasts, removeToast } = useToasts();
	useEffect(() => {
		toasts.forEach((toast) => {
			const timer = setTimeout(() => removeToast(toast.id), 5000);
			return () => clearTimeout(timer);
		});
	}, [toasts, removeToast]);

	return (
		<>
			{toasts && (
				<div className="fixed bottom-0 right-0 flex flex-col-reverse gap-3 p-5 z-50">
					<Each
						of={toasts}
						render={({ id, title, msg, type }) => (
							<Toast
								id={id}
								title={title}
								description={msg}
								variant={type}
								key={id}
							/>
						)}
					/>
				</div>
			)}
		</>
	);
}
