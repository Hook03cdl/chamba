import { Button } from './ui/button';
import { TextArea } from './ui/Inputs';

interface propsChamba {
	worker?: string;
	chambaTitle?: string;
	disabled?: boolean;
}

export default function RequestChamba({
	worker = 'User',
	chambaTitle = 'Chamba',
	disabled: disabled,
}: propsChamba) {
	return (
		<div className="flex flex-col items-center w-full gap-4">
			<TextArea
				label="¿En que te puedo ayudar?"
				className="w-full"
				placeholder={`Hola, ${worker}!, me interesa tu servicio ${chambaTitle}, ¿podrías ayudarme?`}
				defaultValue={`Hola, ${worker}!, me interesa tu servicio ${chambaTitle}, ¿podrías ayudarme?`}
			/>
			<Button disabled={disabled} className="w-full">Contactar</Button>
		</div>
	);
}
