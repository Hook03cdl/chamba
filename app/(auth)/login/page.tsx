"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import { Input } from '@/components/ui/Inputs';
import Link from 'next/link';
import { AuthWithPasswordAndEmail } from '@/lib/actions/auth';
import ButtonSubmit from '@/components/ui/ButtonSubmit';


export default function Login() {
	const router = useRouter();
	const [error, setError] = useState(false);

	const handleSubmit = async (formdata) => {
		const result = await AuthWithPasswordAndEmail(formdata);
		if (result.success) {
			router.push('/');
		} else {
			setError(true);
		}
	};

	return (
		<section className="flex *:flex-1 *:h-svh">
			<article className="bg-humo flex justify-center items-center">
				<Logo variant="dark" />
			</article>
			<article className="bg-shark flex justify-center items-center flex-col gap-5">
				<form className="space-y-10 w-72" onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(e.target);
					handleSubmit(formData);
				}}
				>
					{error && (
						<p className="text-red-500">Correo electrónico o contraseña incorrectos</p>
					)}
					<div className="space-y-7">
						<Input
							label={'Correo electrónico'}
							type="email"
							id="email"
							className={`w-full ${error ? 'border-2 border-red-500' : 'border-2 border-niagara-300'}`}
							required
						/>
						<Input
							label={'Contraseña'}
							type="password"
							id="password"
							className={`w-full ${error ? 'border-2 border-red-500' : 'border-2 border-niagara-300'}`}
							required
						/>
					</div>

					<ButtonSubmit className="w-full">Iniciar sesión</ButtonSubmit>
				</form>
				<Link href={'/signup'} className="text-humo hover:underline">
					¿No tienes una cuenta?
				</Link>
			</article>
		</section>
	);
}
