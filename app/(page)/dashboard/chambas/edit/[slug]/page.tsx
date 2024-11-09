import { fetchDataChamba } from "@/lib/data/chambas";
import React from "react";
import { ChambaProps, JobProps } from "@/lib/interfaces/interface";
import { fetchJobsUser } from "@/lib/data/user";
import EditForm from "@/components/dashboard/chambas/EditrForm";
import DeleteChambaButton from "@/components/dashboard/chambas/DeleteChambaButton";
import { Button } from "@/components/ui/button";
import { openModal } from "@/lib/hooks/useModal";

export default async function Page({ params }: { params: { slug: string } }) {
  const chamba = await fetchDataChamba(params.slug);
  const jobs = await fetchJobsUser();

  return (
    <div>
      <div className="m-2 flex flex-row justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Editar Chamba</h1>
        <DeleteChambaButton id={chamba?.id} />
      </div>
      <EditForm jobs={jobs} chamba={chamba} />
    </div>
  );
}
