interface SeparatorProps {
	vertical?: boolean;
}

export default function Separator({ vertical }: SeparatorProps) {
	return (
		<div
			className={` bg-gray-300 ${
				vertical ? 'h-full mx-4 w-[1px]' : 'w-full my-4 h-[1px]'
			}`}
		/>
	);
}
