import { fetchDataChamba } from "@/lib/data/chambas";
import React, { useState } from "react";
import { fetchDataJobs } from "@/lib/data/jobs";
import { ChambaProps, JobProps } from "@/lib/interfaces/interface";
import EditForm from "@/components/dashboard/EditForm";

export default async function Page({ params }: { params: { slug: string } }) {
  const chamba: ChambaProps = await fetchDataChamba(params.slug);
  const jobs = await fetchDataJobs();

  return (
    <div className="bg-white m-4 rounded-lg h-screen">
      <div className="p-4">
        <h1 className="text-gray-800 text-2xl font-bold">
          Editar {chamba.title}
        </h1>
      </div>
      <div className="m-2 grid grid-cols-2 grid-rows-3 gap-2 border rounded-md bg-gray-100">
        <EditForm chamba={chamba} jobs={jobs} />
      </div>
    </div>
  );
}
