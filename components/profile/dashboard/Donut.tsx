import {DonutChart, Legend} from '@tremor/react';
import {DashboardPropsClients_city_count} from "@/lib/interfaces/interface";

const valueFormatter = (number: number) =>
    `Clientes: ${Intl.NumberFormat('us').format(number).toString()}`;

export function Donut({cities_count}: { cities_count: DashboardPropsClients_city_count | undefined }) {
    const cities = [
        {
            name: 'La Paz',
            count: cities_count?.['La Paz'] || 0,
        },
        {
            name: 'San Jose del Cabo',
            count: cities_count?.['San Jose del Cabo'] || 0,
        }
    ];
    return (
        <div className="flex flex-col items-center justify-center space-x-6 w-2/4 gap-4">
            <h5 className="text-center text-gray-800 font-semibold">De donde son tus clientes?</h5>
            <DonutChart
                data={cities}
                category="count"
                index="name"
                valueFormatter={valueFormatter}
                colors={['green', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="w-40"
            />
            <Legend
                categories={[
                    'La Paz',
                    'San Jose del Cabo',
                ]}
                colors={['green', 'cyan', 'indigo', 'violet', 'fuchsia']}
                className="max-w-xs"
            />
        </div>
    );
}
