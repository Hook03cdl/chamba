import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Navbar';
import Modal from '@/components/ui/Modal';
import React from 'react';

export default function LayoutPage({
	children,
	modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
	return (
		<>
			<main>
				<Navbar />
				{children}
				<Footer />
				{modal}
			</main>
			<Modal />
		</>
	);
}
