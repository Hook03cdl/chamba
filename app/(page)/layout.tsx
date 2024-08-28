import Footer from '@/components/footer/Footer';
import AsideBar from '@/components/aside/AsideBar';
import Modal from '@/components/ui/Modal';
import React from 'react';
import Navbar from '@/components/header/Navbar';

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
					<Navbar />
					{children}
					<Footer />
				</div>
			</main>
			<Modal />
		</>
	);
}
