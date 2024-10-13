import { Button } from './ui/button';
import { TextArea } from './ui/Inputs';

interface propsChamba {
	worker: string,
	chambaTitle: string
}

export default function RequestChamba({ worker, chambaTitle }: propsChamba) {
	return (
		<div className="flex flex-col items-center justify-center w-full p-4">
			<h1 className="text-niagara-600 font-semibold mb-6 text-2xl">Solicitar Chamba</h1>
			<p className="text-gray-400 font-bold mb-4">¿En que te puedo ayudar?</p>
			<div className="flex flex-col items-center w-full gap-4">
				<TextArea label="Mensaje" className="w-full" value={`Hola, ${worker}!, me interesa tu servicio ${chambaTitle}, ¿podrías ayudarme?`} placeholder={"Escribe un comentario"} />
				<Button>Contactar</Button>
			</div>
		</div>
	);
}
