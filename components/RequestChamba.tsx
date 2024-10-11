import { Button } from './ui/button';
import { TextArea } from './ui/Inputs';

interface propsChamba {
	worker: string,
	chambaTitle: string
}

export default function RequestChamba({ worker, chambaTitle }: propsChamba) {
	return (
		<div className="flex flex-col items-center justify-center w-full p-4">
			<h1 className="text-shark font-semibold mb-6">Solicitar Chamba</h1>
			<p className="text-gray-400 mb-4">¿En que te puedo ayudar??</p>
			<div className="flex flex-col items-center w-full gap-4">
				<TextArea label="Mensaje" className="w-full" placeholder={`Hola, ${worker}!, me interesa tu servicio ${chambaTitle}, ¿podrías ayudarme?`} />
				<Button className="">Contactar</Button>
			</div>
		</div>
	);
}
