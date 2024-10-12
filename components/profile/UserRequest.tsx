import { RequestProps } from "@/lib/interfaces/interface";
import { Button } from "../ui/button";

/* eslint-disable @next/next/no-img-element */
export default function UserRequest({ request }: { request: RequestProps }) {
  return (
    <div className="flex items-center gap-10 py-5">
      <div className="flex items-center gap-5">
        <img
          src={`https://ui-avatars.com/api/?rounded=true&name=${encodeURIComponent(
            request.worker_name
          )}`}
          alt=""
          className="size-12 rounded-lg"
        />
        <div>
          <h5 className="text-xs text-gray-400">Trabajador</h5>
          <h1 className="font-semibold min-w-32">{request.worker_name}</h1>
        </div>
      </div>
      <div className="grow">
        <h5 className="text-xs text-gray-400">Descripcion</h5>
        <p className="text-wrap line-clamp-1">{request.message}</p>
      </div>
      <div>
        <h5 className="text-xs text-gray-400">Chamba</h5>
        <p className="text-wrap line-clamp-1">{request.chamba_name}</p>
      </div>
      <div className="flex flex-col items-center">
        <h5>Estado</h5>
        <span>{request.status}</span>
      </div>
    </div>
  );
}
