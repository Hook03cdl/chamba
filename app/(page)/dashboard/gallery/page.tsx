"use client";
import FileInput from "@/components/dashboard/FileInput";
import Each from "@/components/Each";
import ButtonSubmit from "@/components/ui/ButtonSubmit";
import {getImages, uploadImage} from "@/lib/actions/dashboard/gallery";
import {useToasts} from "@/lib/hooks/useToast";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useFormState} from "react-dom";
import {ImageProps} from "@/lib/interfaces/interface";
import Image from "next/image";

export default function Page() {
    const [images, setImages] = useState<ImageProps[] | undefined>([]);
    const [state, formAction] = useFormState(uploadImage, {
        title: '',
        msg: '',
        type: 'default',
    });

    const router = useRouter();
    const {addToast} = useToasts();

    useEffect(() => {
        async function fetchImages() {
            const images = await getImages();
            setImages(images);
        }

        fetchImages();
    }, []);

    useEffect(() => {
        if (state.msg && state.title) {
            addToast(state.title, state.msg, state.type);
            if (state.type === 'success') {
                router.refresh();
            }
            // Resetea el estado después de mostrar el toast
            state.title = '';
            state.msg = '';
            state.type = 'default';
        }
    }, [addToast, router, state, state.msg, state.title]);

    return (
        <section className="p-5 min-h-svh flex flex-col gap-4">
            <h1 className="font-bold text-lg">Imagenes</h1>
            <div className="bg-white p-4 border rounded-lg shadow-lg">
                <form action={formAction} noValidate>
                    <FileInput/>
                    <ButtonSubmit className="mt-2">Subir</ButtonSubmit>
                </form>
            </div>
            <div className="bg-white p-4 border rounded-lg shadow-lg">
                <h1>Tus imagenes</h1>
                <Each of={images} render={(i: ImageProps) => (
                    <div key={i.id}>
                        <Image src={i.path} alt={i.alt} width={100} height={100}/>
                    </div>
                )}/>
            </div>
        </section>
    );
}
