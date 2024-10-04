import { BadgeDelta, Card } from '@tremor/react';

interface BadgeProps {
	titulo: string;
	dato: string | number;
}

export function Badge({ titulo, dato }: BadgeProps) {
	return (
		<Card className="mx-auto max-w-sm -z-10">
			<div className="flex items-center justify-between">
				<h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
					{titulo}
				</h4>
				<BadgeDelta
					deltaType="moderateIncrease"
					isIncreasePositive={true}
					size="xs"
				>
					+9.3%
				</BadgeDelta>
			</div>
			<p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
				{dato}
			</p>
		</Card>
	);
}
