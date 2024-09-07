import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Inputs';

export default function Personal() {
	return (
		<div className="space-y-5">
			<Input variant="dark" label="País" id="pais" required className="w-full"/>
			<Input variant="dark" label="Estado" id="estado" required className="w-full" />
			<div className="grid grid-cols-[2fr_1fr] gap-5">
				<Input variant="dark" label="Ciudad" id="city" required className="w-full" />
				<Input variant="dark" label="Postal" id="postal_code" required className="w-full" />
			</div>
			<Input variant="dark" label="Domicilio" id="street" required className="w-full" />
		</div>
	);
}