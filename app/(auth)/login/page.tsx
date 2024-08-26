import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/Inputs';
import Link from "next/link";

export default function Login(){
    return(
        <section className="flex">
            <section className="bg-[#D9D9D9] w-3/6 h-[100vh] flex justify-center items-center">
                <Logo></Logo>
            </section>
            <section className="bg-[#212322] w-3/6 flex justify-center items-center flex-col">
                <div className="space-y-10">
                    <Input label={'Correo electrónico'} id="prueba2" required/>
                    <Input label={'Contraseña'} id="prueba" required/>
                    <Button className="w-full">Iniciar sesión</Button>
                </div>
                <Link href={'/pruebas'} className="mt-14 text-white hover:underline">¿No tienes una cuenta?</Link>
            </section>
        </section>
    );
}