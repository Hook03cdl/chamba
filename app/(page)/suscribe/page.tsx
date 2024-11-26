'use client';

import Plan from '@/components/suscribirse/Plan';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/Inputs';
import Separator from '@/components/ui/Separator';
import {useEffect, useRef} from 'react';
import {useRouter} from "next/navigation";
import {useToasts} from "@/lib/hooks/useToast";
import {useFormState} from "react-dom";
import {sendEmailVerification} from "@/lib/actions/profile";

/* eslint-disable @next/next/no-img-element */
export default function Suscribirse() {
    const router = useRouter();
    const {addToast} = useToasts();
    const [state, formAction] = useFormState(sendEmailVerification, {
        title: "",
        msg: "",
        type: "default",
    });

    useEffect(() => {
        if (state.title && state.msg) {
            if (state.type === 'success') {
                router.refresh();
            }
            addToast(state.title, state.msg, 'success');
            state.title = '';
            state.msg = '';
            state.type = 'default';
        }
    }, [addToast, router, state]);

    const formRef = useRef<HTMLFormElement | null>(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <section className="p-5">
            <form action={formAction}>
                <div className="bg-red-500 rounded-md p-2 text-white mb-2 flex flex-row gap-2">
                    <p>Verifica tu direccion de <strong>correo electronico</strong>, antes de actualizar tu cuenta a
                        trabajador.</p>
                    <button type="submit" className="underline decoration-2">Enviar email</button>
                </div>
            </form>
            <div className="w-full bg-niagara-800 rounded-lg grid grid-cols-2 gap-4 oerflow-hidden">
                <div className="flex flex-col justify-center items-center text-white">
                    <h1 className="font-bold text-4xl">Se parte de chamba!</h1>
                    <p>Encuentra trabajo rapido.</p>
                    <Button className="mt-5" onClick={scrollToForm}>
                        Quiero ser pro!
                    </Button>
                    <p className="font-light">Consigue trabajo en tu ciudad.</p>
                </div>
                <div>
                    <img
                        src="/images/dia-del-albanil.jpg"
                        alt="Albanil"
                        className="object-cover w-full h-auto aspect-square"
                    />
                </div>
            </div>
            <Plan
                name={'Plan Premium'}
                price={'$50.00'}
                benefits={[
                    'Más opciones de contrato',
                    'Reseñas destacadas',
                    'Certificación o verificación',
                    'Descuentos en comisiones',
                    'Análisis y estadística',
                    'Soporte prioritario',
                ]}
            />
            <form
                ref={formRef}
                className="flex items-center justify-center mt-6"
                noValidate
            >
                <div className="bg-white rounded p-4">
                    <h1 className="font-bold">Aplica para ser trabajador. </h1>
                    <p className="font-light text-gray-500">
                        Adquiere todas los beneficios de ser un trabajador en nuestra
                        plataforma.
                    </p>
                    <Separator/>
                    <div className="mt-6 flex flex-col gap-6">
                        <Input
                            label="Nombre de usuario"
                            type="text"
                            id="username"
                            variant="dark"
                            required
                        />
                        <Input
                            label="Correo electronico"
                            type="email"
                            id="email"
                            variant="dark"
                            className="w-full"
                            required
                        />
                        <Input
                            label="Contraseña"
                            type="password"
                            id="password"
                            variant="dark"
                            className="w-full"
                            required
                        />
                        <Input
                            label="Confirmar contraseña"
                            type="password"
                            id="password_confirmation"
                            variant="dark"
                            className="w-full"
                            required
                        />
                        <Button className="w-full">Aplicar</Button>
                    </div>
                </div>
            </form>
        </section>
    );
}
