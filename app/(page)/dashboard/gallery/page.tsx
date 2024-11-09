"use client";
import FileInput from "@/components/dashboard/FileInput";
import ButtonSubmit from "@/components/ui/ButtonSubmit";
import {destroyImage, getImages, uploadImage} from "@/lib/actions/dashboard/gallery";
import {useToasts} from "@/lib/hooks/useToast";
import {useRouter} from "next/navigation";
import React, {useEffect, useRef, useState} from "react";
import {useFormState} from "react-dom";
import {ImageProps} from "@/lib/interfaces/interface";
import Each from "@/components/Each";
import {Button} from "@/components/ui/button";
import {closeModal, openModal} from "@/lib/hooks/useModal";
import {X} from "lucide-react";
import {ToolTip} from "@/components/ui/Tooltip";
import Image from "next/image";
import Popover, {PopButton, PopLink} from "@/components/ui/Popover";

export default function Page() {
    const [images, setImages] = useState<ImageProps[] | []>([]);
    const [state, formAction] = useFormState(uploadImage, {
        toast: {
            title: "",
            msg: "",
            type: "default",
        },
        image: undefined,
    });

    const router = useRouter();
    const {addToast} = useToasts();

    useEffect(() => {

        async function fetchImages() {
            const imagenes = await getImages();
            setImages(imagenes);
        }

        if (state.toast.msg && state.toast.title) {
            addToast(state.toast.title, state.toast.msg, state.toast.type);
            if (state.toast.type === "success") {
                router.refresh();
            }
            state.toast.title = "";
            state.toast.msg = "";
            state.toast.type = "default";
        }
        fetchImages();
    }, [addToast, router, state, state.toast.msg, state.toast.title]);

    const handleDelete = async (id: string) => {
        const formData = new FormData();
        formData.append("id", id);
        const deleteState = await destroyImage({title: "", msg: "", type: "default"}, formData);
        addToast(deleteState.title, deleteState.msg, deleteState.type);
        closeModal();
        if (deleteState.type === "success") {
            setImages((prevImages) => prevImages.filter((image) => image.id !== id))
        }
    }

    return (
        <section className="p-5 flex flex-col gap-4">
            <h1 className="font-bold text-lg">Imagenes</h1>
            <div className="bg-white p-4 border rounded-lg shadow-lg">
                <form action={formAction}>
                    <FileInput/>
                    <ButtonSubmit className="mt-2">Subir</ButtonSubmit>
                </form>

                <div className="mt-4 bg-white p-4 border rounded-lg shadow-lg">
                    <h1>Tus imagenes</h1>
                    {images?.length === 0 && <p className="mt-2">No hay imagenes</p>}
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
                        <Each
                            of={images}
                            render={(i: ImageProps) => (
                                <Popover fallback={

                                    <div className="bg-gray-100 p-4 rounded-lg flex flex-col gap-2">
                                        <ToolTip content={i.alt} position={"bottom"} delay={1}>
                                            <Image
                                                className="h-auto max-w-full rounded-lg"
                                                key={i.id}
                                                src={i.path}
                                                alt={i.alt}
                                                width={200}
                                                height={200}
                                            />
                                        </ToolTip>
                                    </div>
                                }>
                                    <PopButton onClick={() => {
                                        openModal({
                                            content: {
                                                header: "Eliminar Imagen",
                                                body: (
                                                    <p>Estas seguro de que quieres eliminar esta imagen?</p>
                                                ),
                                            },
                                            actionButton: (
                                                <ButtonSubmit variant={"default"}
                                                              onClick={() => handleDelete(i.id)}>Aceptar</ButtonSubmit>
                                            ),
                                        });
                                    }}>
                                        <div className="flex flex-row items-center gap-2">
                                            <X size={16} color="red"/>
                                            <span>Eliminar</span>
                                        </div>
                                    </PopButton> </Popover>
                            )}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
