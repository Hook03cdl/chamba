import Link from 'next/link';
const variants = {
	light: 'text-humo',
	dark: 'text-shark',
};

const sizes = {
	small: { letters: 'text-5xl', name: 'text-[8px] px-1' },
	middle: { letters: 'text-7xl', name: 'text-sm' },
	default: { letters: 'text-9xl', name: '' },
};

interface LogoProps {
	variant?: 'light' | 'dark';
	size?: 'small' | 'middle' | 'default';
}

export default function Logo({
	variant = 'light',
	size = 'default',
}: LogoProps) {
	return (
		<div className={`relative uppercas max-w-max`}>
			<Link href={'/'} className="max-w-max">
				<span
					className={`italic font-extralight ${variants[variant]} ${sizes[size].letters}`}
				>
					CH
				</span>
				<span
					className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-niagara-500 text-white 
						${sizes[size].name}`}
				>
					CHAMBA
				</span>
			</Link>
		</div>
	);
}
