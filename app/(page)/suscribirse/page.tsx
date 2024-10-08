"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Inputs";
import Plan from "./planes/page";

/* eslint-disable @next/next/no-img-element */
export default function Suscribirse() {
  return (
    <section className="p-5 ">
      <div className="w-full bg-niagara-800 rounded-lg grid grid-cols-2 grid-rows-1 gap-4">
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="font-bold text-4xl">Se parte de chamba!</h1>
          <p>Encuentra trabajo rapido.</p>
          <Button className="mt-5">Quiero ser pro!</Button>
          <p className="font-light">Consigue trabajo en tu ciudad.</p>
        </div>
        <div>
          <img src="/images/dia-del-albanil.jpg" alt="Albanil"></img>
        </div>
      </div>
      <Plan
        nombre={"Plan Premium"}
        precio={"$50.00"}
        beneficios={[
          "Más opciones de contrato",
          "Reseñas destacadas",
          "Certificación o verificación",
          "Descuentos en comisiones",
          "Análisis y estadística",
          "Soporte prioritario",
        ]}
      />
      <div className="bg-gray-200 mt-4">
        <h2 className="text-center mb-5">
          Proporciona los siguientes datos para suscribirte
        </h2>
        <form action="">
          <div className="grid grid-cols-2 place-items-center gap-6 px-80">
            <Input
              label="Nombre de usuario"
              type="text"
              id="nombre"
              variant="dark"
              className="w-full"
              required
            ></Input>
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
      </div>
    </section>
  );
}
