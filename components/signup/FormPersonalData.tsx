import RadioGroup, { TextArea } from '@/components/ui/Inputs';
import InputRadio, { Input } from '@/components/ui/Inputs';
import { editDataUser } from '@/lib/actions/profile';
import { fetchDataUser } from '@/lib/data/user';
import { closeModal } from '@/lib/hooks/useModal';
import { useToasts } from '@/lib/hooks/useToast';
import { UserProps } from '@/lib/interfaces/interface';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

export default function FormPersonalData({ idForm }: { idForm: string }) {
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
			<div className="flex *:flex-1 gap-5 py-10">
				<div className="space-y-7 ">
					<Input
						variant="dark"
						label={'Nombre'}
						id="name"
						className="w-full"
						required
						defaultValue={user?.name}
						errorMsg="No puedes dejar este espacio vacio"
					/>
					<Input
						variant="dark"
						label={'Telefono'}
						id="phone_number"
						className="w-full"
						required
						defaultValue={user?.phone_number || ''}
						minLength={10}
						maxLength={12}
						errorMsg="No puedes dejar este espacio vacio"
					/>

					<div>
						<div className="grid grid-cols-[2fr_1fr] items-end gap-5">
							<RadioGroup
								header="Seleciona una ciudad"
								id="city"
								options={[
									{ label: 'La Paz', value: 'La Paz' },
									{ label: 'San Jose del Cabo', value: 'San Jose del Cabo' },
								]}
								select={user?.city || ''}
							/>

							<Input
								variant="dark"
								label="Postal"
								id="postal_code"
								required
								className="w-full"
								defaultValue={user?.postal_code || ''}
								minLength={5}
								errorMsg="Debe de conenter un codigo postal"
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
				<div>
					<TextArea
						variant="dark"
						label="Acerca de mi"
						id="about_me"
						className="w-full"
						required
						defaultValue={user?.about_me || ''}
						minLength={10}
						errorMsg="No puedes dejar este espacio vacio"
					/>
				</div>
			</div>
		</form>
	);
}
