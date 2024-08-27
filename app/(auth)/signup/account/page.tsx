import React from 'react';
import Logo from '@/components/ui/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Inputs';

export default function page() {
	return(
		<section className='flex'>
			<div className='bg-[#D9D9D9] w-3/6 h-[100vh] flex justify-center items-center'>
				<Logo variant='dark'></Logo>
			</div>
			<div className='bg-[#212322] w-3/6 flex justify-center items-center flex-col'>
				<div className='space-y-10'>
					<Input label='Nombre' id='prueba' required></Input>
					<Input label='Correo electrónico' id='prueba2' required></Input>
					<Input label='Contraseña' id='password' type='password' required></Input>
					<Button className='w-full '>Siguiente</Button>
				</div>
			</div>
		</section>
	);
}