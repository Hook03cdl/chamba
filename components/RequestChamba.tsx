'use client';
import { useFormState } from 'react-dom';
import { TextArea } from './ui/Inputs';
import { storeRequest } from '@/lib/actions/requests';
import { useRouter } from 'next/navigation';
import { useToasts } from '@/lib/hooks/useToast';
import { useEffect } from 'react';
import { ChambaProps } from '@/lib/interfaces/interface';
import ButtonSubmit from './ui/ButtonSubmit';

interface propsChamba {
	worker?: string;
	chambaTitle?: string;
	chamba: ChambaProps | undefined;
	disabled?: boolean;
}

export default function RequestChamba({
	worker = 'User',
	chambaTitle = 'Chamba',
	disabled,
	chamba,
}: propsChamba) {
	const [state, formAction] = useFormState(storeRequest, {
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
		<div className="flex flex-col items-center w-full gap-4">
			<form action={formAction} className="w-full">
				<input hidden type="text" name="worker_id" value={chamba?.worker_id} />
				<input hidden type="text" name="chamba_id" value={chamba?.id} />

				<TextArea
					variant="dark"
					label="¿En que te puedo ayudar?"
					name="message"
					className="w-full"
					placeholder={`Hola, ${worker}!, me interesa tu servicio ${chambaTitle}, ¿podrías ayudarme?`}
					defaultValue={`Hola, ${worker}!, me interesa tu servicio ${chambaTitle}, ¿podrías ayudarme?`}
				/>
				<ButtonSubmit disabled={disabled} className="w-full">
					Solicitar
				</ButtonSubmit>
			</form>
		</div>
	);
}
