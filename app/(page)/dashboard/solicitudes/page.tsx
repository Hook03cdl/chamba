"use client";
import CardSolict from "@/components/profile/CardSolict";
import Badge from "@/components/ui/Badge";
import { Button } from "@/components/ui/button";
import Popover, { PopButton, PopLink } from "@/components/ui/Popover";
import Separator from "@/components/ui/Separator";
import { fetchRequests } from "@/lib/actions/requests";
import { RequestProps } from "@/lib/interfaces/interface";
import {
  Table,
  TableBody,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { Check, EllipsisVertical, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Page() {
  const [requests, setRequests] = useState<RequestProps[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const requests = await fetchRequests();
      setRequests(requests);
    };
    fetch();
  }, []);
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">Tus Solicitudes</h1>
      <div className="h-full mt-4">
        <Table className="bg-white border rounded-lg">
          <TableHead className="border-b-2">
            <TableRow>
              <TableHeaderCell className="font-bold">Chamba</TableHeaderCell>
              <TableHeaderCell className="font-bold">Cliente</TableHeaderCell>
              <TableHeaderCell className="font-bold">Mensaje</TableHeaderCell>
              <TableHeaderCell className="font-bold">Estado</TableHeaderCell>
              <TableHeaderCell className="font-bold">Acciones</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableHeaderCell>
                  <a href={`/dashboard/chambas/edit/${request.chamba_slug}`}>
                    <div className="flex flex-row gap-1 items-center">
                      <span className="text-blue-700 decoration-solid underline">
                        {request.chamba_name}
                      </span>
                      <ExternalLink size={16} className="text-blue-700" />
                    </div>
                  </a>
                </TableHeaderCell>
                <TableHeaderCell>{request.client_name}</TableHeaderCell>
                <TableHeaderCell>{request.message}</TableHeaderCell>
                <TableHeaderCell>
                  <Badge status={request.status} />
                </TableHeaderCell>
                <TableHeaderCell>
                  <Popover fallback={<EllipsisVertical />}>
                    <PopButton onClick={() => console.log("Aceptar")}>
                      <div className="flex flex-row items-center">
                        <Check color="green" size={16} />
                        <span className="pl-1">Aceptar</span>
                      </div>
                    </PopButton>
                    <PopButton onClick={() => console.log("Rechazar")}>
                      <div className="flex flex-row items-center">
                        <X color="red" size={16} />
                        <span className="pl-1">Rechazar</span>
                      </div>
                    </PopButton>
                  </Popover>
                </TableHeaderCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableHeaderCell colSpan={2} scope="row" className="text-right">
                total_chambas
              </TableHeaderCell>
              <TableHeaderCell colSpan={3} scope="row" className="text-right">
                n_stat
              </TableHeaderCell>
            </TableRow>
          </TableFoot>
        </Table>
      </div>
    </div>
  );
}
