import Logo from '@/components/ui/Logo';

export default function NotNound() {
	return (
		<div className="flex flex-col gap-20 justify-center items-center h-svh bg-niagara-700">
			<Logo />
			<div className="*:text-white *:text-center">
				<h3 className="text-7xl ">Upss...</h3>
				<p className="text-5xl">A ocurrido un error</p>
				<p className="text-3xl">404</p>
			</div>
		</div>
	);
}
