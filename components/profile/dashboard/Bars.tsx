import {BarChart} from '@tremor/react';
import {DashboardPropsChambas_most_requested_count} from "@/lib/interfaces/interface";

const chartdata = [
    {
        name: 'Amphibians',
        'Number of threatened species': 2488,
    },
    {
        name: 'Birds',
        'Number of threatened species': 1445,
    },
    {
        name: 'Crustaceans',
        'Number of threatened species': 743,
    },
    {
        name: 'Ferns',
        'Number of threatened species': 281,
    },
    {
        name: 'Arachnids',
        'Number of threatened species': 251,
    },
    {
        name: 'Corals',
        'Number of threatened species': 232,
    },
    {
        name: 'Algae',
        'Number of threatened species': 98,
    },
];

const dataFormatter = (number: number) =>
    Intl.NumberFormat('us').format(number).toString();

export function BarChartHero({requested_chambas_count}: {
    requested_chambas_count: DashboardPropsChambas_most_requested_count[] | undefined
}) {
    const data = requested_chambas_count || chartdata;
    return (
        <div className="w-2/4">
            <BarChart
                data={data}
                index="title"
                categories={['conteo']}
                colors={['blue']}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
                onValueChange={(v) => console.log(v)}
            />
        </div>
    );
}
