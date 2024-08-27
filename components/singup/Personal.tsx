import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Inputs';

export default function Personal() {
	return (
		<div className="space-y-5">
			<Input label="País" id="pais" required className="w-full" />
			<Input label="Estado" id="estado" required className="w-full" />
			<div className="grid grid-cols-[2fr_1fr] gap-5">
				<Input label="Ciudad" id="ciudad" required className="w-full" />
				<Input label="Postal" id="postal" required className="w-full" />
			</div>
			<Input label="Domicilio" id="domicilio" required className="w-full" />
			<Button className="w-full">Registrar cuenta</Button>
		</div>
	);
}
