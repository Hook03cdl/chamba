interface SeparatorProps {
	vertical?: boolean;
	className?: string;
}

export default function Separator({
	vertical = false,
	className,
}: SeparatorProps) {
	return (
		<div
			className={` bg-gray-300 ${
				vertical ? 'h-full mx-4 w-[2px]' : 'w-full my-4 h-[2px]'
			} ${className}`}
		/>
	);
}
