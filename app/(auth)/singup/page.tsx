import Account from '@/components/singup/Account';
import ButtonSubmit from '@/components/ui/ButtonSubmit';
import Logo from '@/components/ui/Logo';
import { SingupWithPasswordAndEmail } from '@/lib/actions/auth';
import Link from 'next/link';

export default function Page() {
	return (
		<section className="flex *:flex-1 h-svh">
			<div className="bg-humo flex justify-center items-center">
				<Logo variant="dark" />
			</div>
			<article className="bg-shark flex justify-center items-center flex-col gap-5">
				<form
					action={SingupWithPasswordAndEmail}
					className="w-72 space-y-10"
					id="form"
					noValidate
				>
					<Account />
					<ButtonSubmit className="w-full">Registrarme</ButtonSubmit>
				</form>
				<Link href={'/login'} className=" text-humo hover:underline">
					¿Ya tienes una cuenta?
				</Link>
			</article>
		</section>
	);
}
