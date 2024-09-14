import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Navbar';
import Modal from '@/components/ui/Modal';
import React from 'react';
// import Navbar from '@/components/header/Navbar';

export default function LayoutPage({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<main>
				{/* <AsideBar /> */}
				<Navbar />
				{children}
				<Footer />
			</main>
			<Modal />
		</>
	);
}
