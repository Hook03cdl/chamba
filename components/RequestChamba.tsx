import { Button } from "./ui/button";
import { TextArea } from "./ui/Inputs";

export default function RequestChamba() {
  return (
    <div className="flex flex-col items-center justify-center w-full m-4">
      <h1 className="text-shark font-semibold mb-6">Solicitar Chamba</h1>
      <p className="text-gray-400 mb-4">Cuentale a cerca de tus necesidades?</p>
      <div className="flex flex-col items-center">
        <TextArea label="Mensaje" />
        <Button className="mt-4">Contactar</Button>
      </div>
    </div>
  );
}
