'use client';

import Navbar from '@/components/header/Navbar';
import { Button } from '@/components/ui/button';
import { Checkbox, Input } from '@/components/ui/Inputs';
import Timeline from '@/components/ui/Timeline';
import { Toast } from '@/components/ui/Toast';
import { LogoutUser, getToken } from '@/lib/actions/auth';
import { openModal, useModal } from '@/lib/hooks/useModal';
import { useToasts } from '@/lib/hooks/useToast';

export default function Pruebas() {
	const { addToast } = useToasts();
	return (
		<section className="p-5 min-h-svh space-y-10">
			<div>
				<h3 className="text-4xl mb-3">Header</h3>
				{/* <Navbar /> */}
			</div>
			<div>
				<h3 className="text-4xl mb-3">CheckBox</h3>
				<Checkbox id="Input" label="Label" required />
			</div>
			<div className="space-y-5">
				<h3 className="text-4xl mb-3">Buttons</h3>
				<h3>Dark</h3>
				<Input label={'Label'} id="dark1" required variant="dark" />
				<Input
					type="password"
					label={'Label'}
					id="dark2"
					required
					variant="dark"
				/>
				<div className="bg-shark p-3 space-y-5">
					<h3 className="text-humo text-xs">Light</h3>
					<Input label={'Label'} id="light1" required />
					<h3 className="text-humo text-xs">Input Password</h3>
					<Input type="password" label="Contraseña" id="light2" required />
				</div>
			</div>
			<div className="block space-x-5">
				<h3 className="text-4xl mb-3">Buttons</h3>
				<Button>Default</Button>
				<Button variant={'secondary'}>Secondary</Button>
				<Button variant={'destructive'}>Destructive</Button>
				<Button variant={'ghost'}>Ghost</Button>
				<Button variant={'link'}>Link</Button>
				<Button variant={'outline'}>Outline</Button>
			</div>
			<div className="space-y-5">
				<h3 className="text-4xl mb-3">Toast</h3>
				<Toast
					variant={'default'}
					title={'Default'}
					description={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque magnam fugiat deserunt eum pariatur.'
					}
				/>
				<Toast
					variant={'success'}
					title={'Success'}
					description={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque magnam fugiat deserunt eum pariatur.'
					}
				/>
				<Toast
					variant={'error'}
					title={'Error'}
					description={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque magnam fugiat deserunt eum pariatur.'
					}
				/>
				<Toast
					variant={'warn'}
					title={'Warning'}
					description={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque magnam fugiat deserunt eum pariatur.'
					}
				/>
			</div>
			<div>
				<h3 className="text-4xl mb-3">Modal</h3>
				<div className="flex gap-10">
					<Button
						onClick={() =>
							openModal({
								content: { header: 'Header', body: <h3>Hola soy un modal</h3> },
							})
						}
					>
						Abrir Modal
					</Button>
					<Button onClick={() => openModal({ image: '/images/notFound.png' })}>
						Abrir Modal
					</Button>
				</div>
			</div>
			<div>
				<h3 className="text-4xl mb-3">Timeline</h3>
				<div className="bg-shark p-3">
					<Timeline />
				</div>
			</div>
			<div>
				<h3 className="text-4xl mb-3">Get Token</h3>
				<Button
					onClick={async () => {
						await getToken();
					}}
				>
					Obtener token
				</Button>
				<Button
					variant={'destructive'}
					onClick={async () => {
						await LogoutUser();
					}}
				>
					Borrar token
				</Button>
			</div>{' '}
			<div>
				<h3 className="text-4xl mb-3">Get Token</h3>
				<Button onClick={() => addToast('Prueba', 'hola', 'default')}>
					Obtener token
				</Button>
			</div>
		</section>
	);
}
