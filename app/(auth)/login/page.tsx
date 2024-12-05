'use client';
import { useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import { Input } from '@/components/ui/Inputs';
import Link from 'next/link';
import { AuthWithPasswordAndEmail } from '@/lib/actions/auth';
import ButtonSubmit from '@/components/ui/ButtonSubmit';
import { CircleX } from 'lucide-react';

export default function Login() {
	const router = useRouter();
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (formdata: FormData) => {
		setIsLoading(true);
		const res = await AuthWithPasswordAndEmail(formdata);
		if (res.error) setIsLoading(false);
	};

	return (
		<section className="md:flex *:flex-1 *:h-svh">
			<article className="hidden md:flex bg-humo justify-center items-center">
				<Logo variant="dark" />
			</article>
			<article className="bg-shark flex justify-center items-center flex-col gap-5">
				<form
					className="space-y-10 w-72"
					onSubmit={(e) => {
						e.preventDefault();
						const formData = new FormData(e.currentTarget);
						handleSubmit(formData);
					}}
				>
					{error && (
						<div className="flex gap-x-2">
							<CircleX color="red" size={30}></CircleX>
							<p className="text-red-500">
								Correo electrónico o contraseña incorrectos
							</p>
						</div>
					)}
					<div className='md:hidden flex justify-center'>
						<Logo variant='light'></Logo>
					</div>
					<div className="space-y-7">
						<Input
							label={'Correo electrónico'}
							type="email"
							id="email"
							className={`w-full ${error
								? 'border-2 border-red-500'
								: 'border-2 border-niagara-300'
								}`}
							required
						/>
						<Input
							label={'Contraseña'}
							type="password"
							id="password"
							className={`w-full ${error
								? 'border-2 border-red-500'
								: 'border-2 border-niagara-300'
								}`}
							required
						/>
					</div>

					<ButtonSubmit className="w-full">
						{isLoading ? (
							<div>
								<div className="border-4 border-gray-200 border-t-transparent size-5 rounded-full animate-spin" />
								<span className="sr-only">Loading...</span>
							</div>
						) : (
							'Iniciar sesión'
						)}
					</ButtonSubmit>
				</form>
				<Link href={'/signup'} className="text-humo hover:underline">
					¿No tienes una cuenta?
				</Link>
			</article>
		</section>
	);
}
