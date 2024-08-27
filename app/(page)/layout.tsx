import Footer from '@/components/footer/Footer';
import AsideBar from '@/components/nav/AsideBar';
import Modal from '@/components/ui/Modal';
import React from 'react';

export default function LayoutPage({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<main className="grid grid-cols-[auto_1fr]">
				<AsideBar />
				<div>
					{children}
					<Footer />
				</div>
			</main>
			<Modal />
		</>
	);
}
