import Logo from '@/components/ui/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Inputs';
import Link from 'next/link';

export default function Login() {
	return (
		<section className="flex *:flex-1 *:h-svh">
			<article className="bg-humo flex justify-center items-center">
				<Logo variant="dark" />
			</article>
			<article className="bg-shark flex justify-center items-center flex-col gap-5">
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
				<Link href={'/signup/account'} className=" text-humo hover:underline">
					¿No tienes una cuenta?
				</Link>
			</article>
		</section>
	);
}
