"use client";
import { JobProps } from "@/lib/interfaces/interface";
import { TextInput, Textarea, Select, SelectItem } from "@tremor/react";
import FileInput from "../FileInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createChamba } from "@/lib/actions/dashboard/chambas";
import React from "react";
import ButtonSubmit from "@/components/ui/ButtonSubmit";

export default function CreateForm({ jobs }: { jobs: any }) {
  return (
    <div>
      <form action={createChamba}>
        <div className="m-2 grid grid-cols-2 grid-rows-3 gap-2 border rounded-md bg-gray-100">
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
            <select id="job_id" name="job_id">
              {jobs.map((job: JobProps) => (
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
              rows={2}
            />
          </div>
          <div className="p-4 text-gray-800 col-span-2 row-start-3">
            <FileInput />
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
