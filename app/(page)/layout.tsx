import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Navbar';
import Modal from '@/components/ui/Modal';
import React from 'react';

export default function LayoutPage({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<main>
				<Navbar />
				{children}
				<Footer />
			</main>
			<Modal />
		</>
	);
}
