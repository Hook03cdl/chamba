"use client";
import { BarChartHero } from "@/components/profile/dashboard/Bars";
import { Donut } from "@/components/profile/dashboard/Donut";
import { Badge } from "@/components/profile/dashboard/Badge";
import Each from "@/components/Each";
import { useEffect, useState } from "react";
import getData from "@/lib/actions/dashboard/dashboard";
import { DataDashboardProps } from "@/lib/interfaces/interface";

export default function Page() {
  const [data, setData] = useState<DataDashboardProps>();

  const datos = [
    { title: "Chambas", data: data?.chambas },
    { title: "Solicitudes Pendientes", data: data?.requests },
    { title: "Imagenes", data: data?.images },
    { title: "Chambas Completadas", data: data?.chambasRealizadas},
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = getData();
      setData(await data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-5 space-y-10">
      <div className="flex gap-3">
        <Each
          of={datos}
          render={(dato, index) => (
            <Badge key={index} titulo={dato.title} dato={dato.data} />
          )}
        />
      </div>
      <div className="flex">
        <BarChartHero />
        <Donut />
      </div>
    </div>
  );
}
