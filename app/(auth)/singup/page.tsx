import Account from '@/components/singup/Account';
import Personal from '@/components/singup/Personal';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';
import Timeline from '@/components/ui/Timeline';
import Link from 'next/link';

export default function Page() {
	return (
		<section className="flex *:flex-1 h-svh">
			<div className="bg-humo flex justify-center items-center">
				<Logo variant="dark" />
			</div>
			<article className="bg-shark flex justify-center items-center flex-col gap-5">
				<form action="" className="w-72 space-y-10" id="form" noValidate>
					<Account />
					<Button type="submit" className="w-full">
						Registrarme
					</Button>
				</form>
				<Link href={'/login'} className=" text-humo hover:underline">
					¿Ya tienes una cuenta?
				</Link>
			</article>
		</section>
	);
}
