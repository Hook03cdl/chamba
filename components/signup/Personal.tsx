import InputRadio, { Input } from '@/components/ui/Inputs';
import { editDataUser } from '@/lib/actions/profile';
import { fetchDataUser } from '@/lib/data/user';
import { UserProps } from '@/lib/interfaces/interface';
import { useEffect, useState } from 'react';

export default function Personal({ idForm }: { idForm: string }) {
	const [user, setUser] = useState<UserProps | undefined>();
	useEffect(() => {
		const getDataUser = async () => {
			const data = await fetchDataUser();
			setUser(data);
		};
		getDataUser();
	}, []);
	if (!user) return <h3>Cargando...</h3>;
	return (
		<form action={editDataUser} id={idForm}>
			<div className="space-y-5 max-w-md py-10">
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
					<h3>Selecione un estado</h3>
					<div className="grid grid-cols-[2fr_1fr] gap-5">
						<div className="space-x-5">
							<InputRadio label="La Paz" id="city" value={'La Paz'} />
							<InputRadio
								label="San Jose del Cabo"
								id="city"
								value={'San Jose del Cabo'}
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
