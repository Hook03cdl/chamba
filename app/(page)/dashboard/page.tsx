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
    { titulo: "Chambas", numero: data?.chambas },
    { titulo: "Solicitudes pendientes", numero: data?.requests },
    { titulo: "titulo3", numero: 1943 },
    { titulo: "titulo4", numero: 900 },
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
            <Badge key={index} titulo={dato.titulo} dato={dato.numero} />
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
