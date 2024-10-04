import AsideBar from '@/components/aside/AsideBar';

export default function LayoutPage({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<main className="h-screen grid grid-cols-[auto_1fr]">
				<AsideBar />
				<div>{children}</div>
			</main>
		</>
	);
}
