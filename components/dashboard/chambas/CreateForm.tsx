"use client";
import { ImageProps, JobProps } from "@/lib/interfaces/interface";
import { TextInput, Textarea, Select, SelectItem } from "@tremor/react";
import FileInput from "../FileInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createChamba } from "@/lib/actions/dashboard/chambas";
import React, { useEffect } from "react";
import ButtonSubmit from "@/components/ui/ButtonSubmit";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useToasts } from "@/lib/hooks/useToast";

export default function CreateForm({ jobs, images }: { jobs: any, images: any }) {
  const [state, formAction] = useFormState(createChamba, {
    title: "",
    msg: "",
    type: "default",
  });

  const router = useRouter();
  const { addToast } = useToasts();

  useEffect(() => {
    if (state.msg && state.title) {
      addToast(state.title, state.msg, state.type);
      if (state.type === "success") {
        router.refresh();
      }
      // Resetea el estado después de mostrar el toast
      state.title = "";
      state.msg = "";
    }
  }, [addToast, router, state, state.msg, state.title]);

  return (
    <div>
      <form action={formAction} noValidate>
        <div className="m-2 grid grid-cols-2 grid-rows-2 gap-2 border rounded-md bg-gray-100">
          <div className="p-4 text-gray-800">
            <label htmlFor="title" className="font-semibold text-md">
              Titulo
            </label>
            <TextInput
              id="title"
              name="title"
              placeholder="Ingrese el titulo de su chamba"
            />
          </div>
          <div className="p-4 text-gray-800">
            <span className="font-semibold text-md">Oficio</span>
            <Select id="job_id" name="job_id">
              {jobs.map((job: JobProps) => (
                <SelectItem key={job.id} value={job.id}>
                  {job.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="p-4 text-gray-800">
            <span className="font-semibold text-md">Imagen</span>
            <Select id="image_id" name="image_id">
              {images.map((image: ImageProps) => (
                <SelectItem key={image.id} value={image.id}>
                  {image.alt}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="p-4 text-gray-800">
            <span className="font-semibold text-md">Descripcion</span>
            <Textarea
              id="description"
              name="description"
              placeholder="Escribe la descripcion de tu chamba"
              rows={2}
            />
          </div>
          <div className="flex gap-4 p-4">
            <ButtonSubmit>Guardar</ButtonSubmit>
            <Link href={"/dashboard/chambas"}>
              <Button variant="cancel">Cancelar</Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
