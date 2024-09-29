"use client";
import { BarChartHero } from "@/components/profile/dashboard/Bars";
import { Donut } from "@/components/profile/dashboard/Donut";
import { Badge } from "@/components/profile/dashboard/Badge";

export default function Page() {
  const datos = [
    { titulo: "titulo1", numero: 144 },
    { titulo: "titulo2", numero: 235 },
    { titulo: "titulo3", numero: 1943 },
    { titulo: "titulo4", numero: 900 },
  ];

  return (
    <div className="p-5 space-y-10">
      <div className="flex gap-3">
        {datos.map((dato, index) => {
          return (
            <Badge key={index} titulo={dato.titulo} dato={dato.numero}></Badge>
          );
        })}
      </div>
      <div className="flex">
        <BarChartHero></BarChartHero>
        <Donut></Donut>
      </div>
    </div>
  );
}
