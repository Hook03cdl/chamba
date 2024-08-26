import Footer from '@/components/footer/Footer';
import AsideBar from '@/components/nav/AsideBar';
import React from 'react';

export default function LayoutPage({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="grid grid-cols-[auto_1fr]">
			<AsideBar />
			<main>
				{children}
				<Footer />
			</main>
		</div>
	);
}
