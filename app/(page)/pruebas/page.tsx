import { Button } from '@/components/ui/button';
import { Checkbox, Input } from '@/components/ui/Inputs';
import { Toast } from '@/components/ui/Toast';

export default function page() {
	return (
		<section className="flex items-center gap-5 p-5 min-h-svh bg-[#ccc]">
			<Checkbox id="Input" label="Label" required />
			<div className="space-y-5">
				<Input label={'Label'} id="prueba" required variant="dark" />
				<Input label={'Label'} id="prueba" required />
			</div>
			<Button>Label</Button>
			<Toast
				variant={'success'}
				title={'Titulo'}
				description={
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque magnam fugiat deserunt eum pariatur.'
				}
			/>
		</section>
	);
}
