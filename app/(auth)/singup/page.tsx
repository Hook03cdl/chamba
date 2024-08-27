'use client';

import Account from '@/components/singup/Account';
import Personal from '@/components/singup/Personal';
import Logo from '@/components/ui/Logo';
import Timeline from '@/components/ui/Timeline';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
	const [position, setPosition] = useState<number>(0);

	return (
		<section className="flex *:flex-1 h-svh">
			<div className="bg-humo flex justify-center items-center">
				<Logo variant="dark" />
			</div>
			<article className="bg-shark flex justify-center items-center flex-col gap-5">
				<Timeline change={(p) => setPosition(p)} />
				<form action="" className="w-72">
					<div
						className={`${
							position == 0 ? '' : 'hidden'
						} w-full transition-opacity`}
					>
						<Account />
					</div>
					<div
						className={`${
							position == 1 ? '' : 'hidden'
						} w-full transition-opacity`}
					>
						<Personal />
					</div>
				</form>
				<Link href={'/login'} className=" text-humo hover:underline">
					¿No tienes una cuenta?
				</Link>
			</article>
		</section>
	);
}
