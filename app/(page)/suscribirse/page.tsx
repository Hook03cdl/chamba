"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Inputs";
import Plan from "./planes/page";

export default function Suscribirse() {
    return (
        <section className="p-5 ">
            <h2 className="text-center mb-5">Proporciona los siguientes datos para suscribirte</h2>
            <form action="">
                <div className="grid grid-cols-2 place-items-center gap-6 px-80">
                    <Input label="Nombre de usuario"
                        type="text"
                        id="nombre"
                        variant="dark"
                        className="w-full"
                        required></Input>
                    <Input
                        label="Correo electrónico"
                        type="email"
                        id="correo"
                        variant="dark"
                        className="w-full"
                        required
                    ></Input>
                    <Input
                        label="Contraseña"
                        type="password"
                        id="correo"
                        variant="dark"
                        className="w-full"
                        required
                    ></Input>
                    <Input
                        label="Dirección o domicilio"
                        type="text"
                        id="trabajo"
                        variant="dark"
                        className="w-full"
                        required
                    ></Input>

                </div>
                <Button className="block mx-auto mt-5">Actualizar</Button>
            </form>
            <Plan nombre={"Plan Premium"} precio={'$50.00'} beneficios={["Más opciones de contrato",
                "Reseñas destacadas", "Certificación o verificación",
                "Descuentos en comisiones", "Análisis y estadística", "Soporte prioritario"]}></Plan>
        </section>
    );
}