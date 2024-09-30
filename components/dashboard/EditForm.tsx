import { TextInput, Textarea, Select, SelectItem } from "@tremor/react";
import { ChambaProps, JobProps } from "@/lib/interfaces/interface";
import FileInput from "@/components/dashboard/FileInput";
import { useState } from "react";

export default function EditForm({
  chamba,
  jobs,
}: {
  chamba: ChambaProps;
  jobs: any;
}) {
  return (
    <>
      <div className="p-4 text-gray-800">
        <label htmlFor="title" className="font-semibold text-md">
          Titulo
        </label>
        <TextInput placeholder="Titulo" defaultValue={chamba.title} />
      </div>
      <div className="p-4 text-gray-800">
        <span className="font-semibold text-md">Oficio</span>
        <Select defaultValue={chamba.job_id.toString()}>
          {jobs?.map((job: JobProps) => (
            <>
              <SelectItem key={job.id} value={job.id.toString()}>
                {job.name}
              </SelectItem>
            </>
          ))}
        </Select>
      </div>
      <div className="p-4 col-span-2 text-gray-800">
        <span className="font-semibold text-md">Descripcion</span>
        <Textarea rows={2} defaultValue={chamba.description} />
      </div>
      <div className="p-4 text-gray-800 col-span-2 row-start-3">
        <FileInput />
      </div>
    </>
  );
}
