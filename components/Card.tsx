/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { User } from "lucide-react";

interface CardProps {
  src: string;
  id: string;
  name: string;
  description: string;
  worker_name: string;
  rating: number;
  job_name: string;
  href: string;
}

export default function Card({
  src,
  id,
  name,
  description,
  rating,
  worker_name,
  job_name,
  href,
}: CardProps) {
  return (
    <div className="grid grid-rows-2 max-w-64 h-96 rounded-xl border border-gray-300 overflow-hidden shadow-md">
      <Link href={href} className="">
        <div className="w-full h-full">
          <img
            src={src || "/images/notFound.png"}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-col justify-between s p-3 bg-white">
        <h6 className="text-lg font-semibold">{name}</h6>
        <Link href={`/worker/${id}`} className="flex space-x-2">
          <User size={16} />
          <p className="text-xs font-normal text-slate-600">{worker_name}</p>
        </Link>
        <p className="text-balance line-clamp-3">{description}</p>
        <div className="flex space-x-2 justify-end *:text-sm border-t-2 pt-2">
          <span className="truncate text-ellipsis me-2 max-w-24 px-2.5 py-0.5 rounded bg-niagara-500/50">
            {job_name}
          </span>
          <span className="bg-niagara-500/60 px-2 rounded-full text-shark font-bold">
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}
