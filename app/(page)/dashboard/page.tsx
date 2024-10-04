'use client';
import { BarChartHero } from '@/components/profile/dashboard/Bars';
import { Donut } from '@/components/profile/dashboard/Donut';
import { Badge } from '@/components/profile/dashboard/Badge';
import Each from '@/components/Each';

export default function Page() {
	const datos = [
		{ titulo: 'titulo1', numero: 144 },
		{ titulo: 'titulo2', numero: 235 },
		{ titulo: 'titulo3', numero: 1943 },
		{ titulo: 'titulo4', numero: 900 },
	];

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
