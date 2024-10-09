"use client";
import Card from "@/components/Card";
import Each from "@/components/Each";
import { fetchDataChambasBySlug } from "@/lib/data/chambas";
import { ChambaProps } from "@/lib/interfaces/interface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [chambas, setChambas] = useState<ChambaProps[]>([]);
  const { slug } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchDataChambasBySlug(slug);
      setChambas(data);
    };
    fetch();
  }, [slug]);
  return (
    <section className="p-4 px-20 min-h-svh">
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-10">
        <Each
          of={chambas}
          render={(c: ChambaProps) => (
            <Card
              href={`/servicio/${c.slug}`}
              src={""}
              id={c.id.toString()}
              name={`${c.title}`}
              description={c.description}
              rating={c.rating}
              worker_name={c.worker_name}
              job_name={c.trabajo_name}
            />
          )}
        ></Each>
      </div>
    </section>
  );
}
