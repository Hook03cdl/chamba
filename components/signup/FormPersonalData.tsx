import RadioGroup from '@/components/ui/Inputs';
import InputRadio, { Input } from '@/components/ui/Inputs';
import { editDataUser } from '@/lib/actions/profile';
import { fetchDataUser } from '@/lib/data/user';
import { closeModal } from '@/lib/hooks/useModal';
import { useToasts } from '@/lib/hooks/useToast';
import { UserProps } from '@/lib/interfaces/interface';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

export default function FormPersonalData({
	idForm,
	onSubmit,
}: {
	idForm: string;
	onSubmit?: () => void;
}) {
	const route = useRouter();
	const { addToast } = useToasts();
	const [user, setUser] = useState<UserProps | undefined>();
	const [state, formAction] = useFormState(editDataUser, {
		title: '',
		msg: '',
		type: 'default',
	});

	useEffect(() => {
		const getDataUser = async () => {
			const data = await fetchDataUser();
			setUser(data);
		};
		getDataUser();
	}, []);

	useEffect(() => {
		if (state.title && state.msg) {
			if (state.type == 'success') {
				route.refresh();
				closeModal();
			}
			addToast(state.title, state.msg, state.type);
			state.title = '';
			state.msg = '';
			state.type = 'default';
		}
	}, [addToast, route, state]);

	if (!user) return <h3>Cargando...</h3>;
	return (
		<form action={formAction} id={idForm} noValidate>
			<div className="space-y-7 max-w-md py-10">
				<Input
					variant="dark"
					label={'Nombre'}
					id="name"
					className="w-full"
					required
					defaultValue={user?.name}
				/>
				<Input
					variant="dark"
					label={'Telefono'}
					id="phone_number"
					className="w-full"
					required
					defaultValue={user?.phone_number || ''}
				/>
				<div className="space-y-3">
					<h3>Selecione una ciudad</h3>
					<div className="grid grid-cols-[2fr_1fr] gap-5">
						<div className="space-x-5">
							<RadioGroup
								id="city"
								options={[
									{ label: 'La Paz', value: 'La Paz' },
									{ label: 'San Jose del Cabo', value: 'San Jose del Cabo' },
								]}
								select={user?.city || ''}
							/>
						</div>

						<Input
							variant="dark"
							label="Postal"
							id="postal_code"
							required
							className="w-full"
							defaultValue={user?.postal_code || ''}
						/>
					</div>
				</div>
				<Input
					variant="dark"
					label="Domicilio"
					id="street"
					required
					className="w-full"
					defaultValue={user?.street || ''}
				/>
			</div>
		</form>
	);
}
