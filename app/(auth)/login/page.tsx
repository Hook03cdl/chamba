'use client';

import Logo from '@/components/ui/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Inputs';
import Link from 'next/link';
import { AuthWithPasswordAndEmail } from '@/lib/actions/auth';
import ButtonSubmit from '@/components/ui/ButtonSubmit';

export default function Login() {
	return (
		<section className="flex *:flex-1 *:h-svh">
			<article className="bg-humo flex justify-center items-center">
				<Logo variant="dark" />
			</article>
			<article className="bg-shark flex justify-center items-center flex-col gap-5">
				<form className="space-y-10 w-72" action={AuthWithPasswordAndEmail}>
					<div className="space-y-7">
						<Input
							label={'Correo electrónico'}
							type="email"
							id="email"
							className="w-full"
							required
						/>
						<Input
							label={'Contraseña'}
							type="password"
							id="password"
							className="w-full"
							required
						/>
					</div>

					<ButtonSubmit className="w-full">Iniciar sesión</ButtonSubmit>
				</form>
				<Link href={'/signup'} className=" text-humo hover:underline">
					¿No tienes una cuenta?
				</Link>
			</article>
		</section>
	);
}
