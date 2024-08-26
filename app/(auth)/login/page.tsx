import Logo from '@/components/ui/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Inputs';
import Link from 'next/link';

export default function Login() {
	return (
		<section className="flex h-svh *:h-full">
			<article className="bg-humo flex-1 flex justify-center items-center">
				<Logo variant="dark" />
			</article>
			<article className="bg-shark flex-1 flex justify-center items-center flex-col gap-10">
				<div className="space-y-10">
					<Input label={'Correo electrónico'} id="prueba2" required />
					<Input label={'Contraseña'} id="prueba" required />
					<Button className="w-full">Iniciar sesión</Button>
				</div>
				<Link href={'/signup'} className="text-humo hover:underline">
					¿No tienes una cuenta?
				</Link>
			</article>
		</section>
	);
}
