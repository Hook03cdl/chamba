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
				<div className='space-y-5'>
					<Input label='País' id='prueba' required></Input>
					<Input label='Estado' id='prueba2' required></Input>
                    <div className="flex flex-row">
					    <Input label='Ciudad' id='prueba3' required className='w-1/2'></Input>
                        <Input label='Postal' id='prueba4' required className='w-3/12'></Input>
                    </div>
                    <Input label='Domicilio' id='prueba5' required></Input>
					<Button className='w-full'>Registrar cuenta</Button>
				</div>
			</div>
		</section>
	);
}