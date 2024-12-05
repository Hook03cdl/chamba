import Account from '@/components/signup/Account';
import ButtonSubmit from '@/components/ui/ButtonSubmit';
import Logo from '@/components/ui/Logo';
import { SingupWithPasswordAndEmail } from '@/lib/actions/auth';
import Link from 'next/link';

export default function Page() {
	return (
		<section className="lg:flex *:flex-1 h-svh">
			<div className="hidden lg:flex justify-center items-center bg-humo">
				<Logo variant="dark" />
			</div>
			<article className="bg-shark flex justify-center items-center flex-col space-y-5 p-3 h-full">
				<div className='lg:hidden'>
					<Logo variant='light'></Logo>
				</div>
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
