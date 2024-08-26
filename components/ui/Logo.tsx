import Link from 'next/link';
const variants = {
	light: 'text-humo',
	dark: 'text-shark',
};

interface LogoProps {
	variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'light' }: LogoProps) {
	return (
		<div className="relative uppercas max-w-max">
			<Link href={'/'} className="max-w-max">
				<span
					className={`text-8xl italic font-extralight ${variants[variant]}`}
				>
					CH
				</span>
				<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-niagara-500 text-sm px-3 text-white">
					CHAMBA
				</span>
			</Link>
		</div>
	);
}
