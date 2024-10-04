'use client';
import { updateUserJobs } from '@/lib/actions/profile';
import { useToasts } from '@/lib/hooks/useToast';
import { useFormState } from 'react-dom';
import ButtonSubmit from '@/components/ui/ButtonSubmit';
import JobsOptions from './JobsOptions';
import { Suspense, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FormUpdateJobs() {
	const [state, formAction] = useFormState(updateUserJobs, {
		title: '',
		msg: '',
		type: 'default',
	});
	const router = useRouter();
	const { addToast } = useToasts();

	useEffect(() => {
		if (state.msg && state.title) {
			addToast(state.title, state.msg, state.type);
			if (state.type === 'success') {
				router.refresh();
			}
			// Resetea el estado después de mostrar el toast
			state.title = '';
			state.msg = '';
		}
	}, [addToast, router, state, state.msg, state.title]);

	return (
		<form action={formAction} noValidate>
			<div
				className={
					'bg-gray-100 p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded border'
				}
			>
				<JobsOptions />
				<div className={'flex w-full justify-start mt-2'}>
					<ButtonSubmit>Actualizar</ButtonSubmit>
				</div>
			</div>
		</form>
	);
}
