"use client";
import { Button } from "@/components/ui/button";
import ButtonSubmit from "@/components/ui/ButtonSubmit";
import { updateChambaWorker } from "@/lib/actions/dashboard/chambas";
import { useToasts } from "@/lib/hooks/useToast";
import { ChambaProps, JobProps } from "@/lib/interfaces/interface";
import { Textarea, TextInput } from "@tremor/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function EditForm({
  jobs,
  chamba,
}: {
  jobs: any;
  chamba: ChambaProps;
}) {
  const [state, formAction] = useFormState(updateChambaWorker, {
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
        <TextInput
          id="id"
          name="id"
          hidden
          placeholder="Ingrese el titulo de su chamba"
          defaultValue={chamba.id}
        />
        <div className="m-2 grid grid-cols-2 grid-rows-3 gap-2 border rounded-md bg-gray-100">
          <div className="p-4 text-gray-800">
            <label htmlFor="title" className="font-semibold text-md">
              Titulo
            </label>
            <TextInput
              id="title"
              name="title"
              placeholder="Ingrese el titulo de su chamba"
              defaultValue={chamba.title}
            />
          </div>
          <div className="p-4 text-gray-800">
            <span className="font-semibold text-md">Oficio</span>
            <select id="job_id" name="job_id">
              {jobs.jobs.map((job: JobProps) => (
                <option key={job.id} value={job.id}>
                  {job.name}
                </option>
              ))}
            </select>
          </div>
          <div className="p-4 col-span-2 text-gray-800">
            <span className="font-semibold text-md">Descripcion</span>
            <Textarea
              id="description"
              name="description"
              placeholder="Escribe la descripcion de tu chamba"
              defaultValue={chamba.description}
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
