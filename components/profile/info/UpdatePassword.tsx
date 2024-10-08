"use client"
import {TextInput} from "@tremor/react";
import ButtonSubmit from "@/components/ui/ButtonSubmit";
import {updatePassword} from "@/lib/actions/profile";
import {useFormState} from "react-dom";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useToasts} from "@/lib/hooks/useToast";

export default function UpdatePassword() {
    const router = useRouter();
    const {addToast} = useToasts();
    const [state, formAction] = useFormState(updatePassword, {
        title: "",
        msg: "",
        type: 'default',
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
    return (
        <form action={formAction}>
            <div className={"bg-gray-100 p-4 grid grid-cols-4 grid-rows-3 gap-4 border w-full"}>
                <div className={"col-span-4"}>
                    <TextInput id={"email"} name={"email"} type={"email"} placeholder={"Escriba su correo"} required/>
                </div>
                <div className={"row-start-2 col-span-2"}>
                    <TextInput id={"password"} name={"password"} type={"password"}
                               placeholder={"Escriba su nueva contrasena"} required/>
                </div>
                <div className={"col-span-2 col-start-3 row-start-2"}>
                    <TextInput id={"password_confirmation"} name={"password_confirmation"} type={"password"}
                               placeholder={"Escriba su nueva contrasena"} required/>
                </div>
                <div className={"col-span-2 row-start-3"}>
                    <ButtonSubmit>Actualizar</ButtonSubmit>
                </div>
            </div>
        </form>
    );
}
