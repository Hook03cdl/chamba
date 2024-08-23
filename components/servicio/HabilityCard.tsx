interface HabilityCardProps {
	title: string;
}

export default function HabilityCard({ title }: HabilityCardProps) {
	return (
		<div className="shadow-md max-w-max p-1 px-3 rounded-full bg-gray-200">
			<h3>{title}</h3>
		</div>
	);
}
