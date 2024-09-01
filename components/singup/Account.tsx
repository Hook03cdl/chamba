import { Input } from '@/components/ui/Inputs';

export default function Account() {
	return (
		<div className="space-y-7 w-full">
			<Input label="Nombre" id="name" required className="w-full" />
			<Input
				label="Correo electrónico"
				id="email"
				required
				className="w-full"
			/>
			<Input
				label="Contraseña"
				id="password"
				type="password"
				required
				className="w-full"
			/>
			<Input
				label="Confirmar contraseña"
				id="password_confirm"
				type="password"
				required
				className="w-full"
			/>
		</div>
	);
}
