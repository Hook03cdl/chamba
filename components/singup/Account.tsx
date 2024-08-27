'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Inputs';
import { next } from '@/hooks/useTimeLine';

export default function Account() {
	return (
		<div className="space-y-7 w-full">
			<Input label="Nombre" id="prueba" required className="w-full" />
			<Input
				label="Correo electrónico"
				id="prueba2"
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
			<Button type="button" className="w-full" onClick={() => next(2)}>
				Siguiente
			</Button>
		</div>
	);
}
