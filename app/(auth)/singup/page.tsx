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
				<form action="" className="w-72" id="form" noValidate>
					<Timeline
						sections={[
							<Account key={Math.random()} />,
							<Personal key={Math.random()} />,
						]}
						buttonSubmit={<Button type="submit">Registrar</Button>}
					/>
				</form>
				<Link href={'/login'} className=" text-humo hover:underline">
					¿Ya tienes una cuenta?
				</Link>
			</article>
		</section>
	);
}
