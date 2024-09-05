/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from '../ui/button';

export default function CardSolict() {
	return (
		<div className="flex items-center gap-10 py-5">
			<div className="flex items-center gap-5">
				<img src="/images/notFound.png" alt="" className="size-14 rounded-lg" />
				<div>
					<h5 className="text-xs text-gray-400">Nombre</h5>
					<h1 className="font-semibold min-w-32">User Name</h1>
				</div>
			</div>
			<div className="grow">
				<h5 className="text-xs text-gray-400">Descripcion</h5>
				<p className="text-wrap line-clamp-1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum
					dolor expedita iste vero, earum quia ut asperiores quod velit,
					obcaecati quas esse eligendi temporibus. Suscipit debitis enim atque
					eius.
				</p>
			</div>
			<div className="flex items-center gap-5">
				<Button variant={'destructive'} size={'sm'}>
					Rechazar
				</Button>
				<Button size={'sm'}>Aceptar</Button>
			</div>
		</div>
	);
}
