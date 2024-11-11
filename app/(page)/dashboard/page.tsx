"use client";
import {BarChartHero} from "@/components/profile/dashboard/Bars";
import {Donut} from "@/components/profile/dashboard/Donut";
import {Badge} from "@/components/profile/dashboard/Badge";
import Each from "@/components/Each";
import {useEffect, useState} from "react";
import getData from "@/lib/actions/dashboard/dashboard";
import {DashboardProps} from "@/lib/interfaces/interface";

export default function Page() {
    const [data, setData] = useState<DashboardProps>();

    const datos = [
        {title: "Chambas", data: data?.chambas_count},
        {title: "Solicitudes Pendientes", data: data?.requests_pendant_count},
        {title: "Imagenes", data: data?.images_count},
        {title: "Chambas Completadas", data: data?.chambas_done_count},
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
                        <Badge key={index} titulo={dato.title} dato={dato.data}/>
                    )}
                />
            </div>
            <div className="flex bg-white rounded shadow-lg border">
                <BarChartHero requested_chambas_count={data?.chambas_most_requested_count}/>
                <Donut cities_count={data?.clients_city_count}/>
            </div>
        </div>
    );
}
