'use client';

import Logo from '@/components/ui/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Inputs';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
	const [visible, setVisible] = useState(false);
	const [eyeVisible, setEyeVisible] = useState('hidden');
	const [eyeOffVisible, setEyeOffVisible] = useState('');

	function changePassword() {
		setVisible(!visible);

		if (visible) {
			setEyeVisible('hidden');
			setEyeOffVisible('');
		} else {
			setEyeVisible('');
			setEyeOffVisible('hidden');
		}
	}

	return (
		<section className="flex">
			<section className="bg-humo w-3/6 h-[100vh] flex justify-center items-center">
				<Logo variant="dark" />
			</section>
			<section className="bg-shark w-3/6 flex justify-center items-center flex-col">
				<div className="space-y-10">
					<Input
						label={'Correo electrónico'}
						type="email"
						id="email"
						required
					/>
					<Input
						label={'Correo electrónico'}
						type="password"
						id="password"
						required
					/>

					<Button className="w-full">Iniciar sesión</Button>
				</div>
				<Link href={'/pruebas'} className="mt-14 text-white hover:underline">
					¿No tienes una cuenta?
				</Link>
			</section>
		</section>
	);
}
