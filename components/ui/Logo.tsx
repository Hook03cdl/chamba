import Link from 'next/link';

export default function Logo() {
	return (
		<Link href={'/'}>
			<div className="relative uppercase text-white">
				<span className="text-8xl italic font-extralight">CH</span>
				<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-niagara-500 text-sm px-3">
					CHAMBA
				</span>
			</div>
		</Link>
	);
}
