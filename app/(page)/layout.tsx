import Footer from '@/components/footer/Footer';
import Navbar from '@/components/header/Navbar';
import Modal from '@/components/ui/Modal';

export default function LayoutPage({
	children,
	modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
	return (
		<>
			<Navbar />
			<main className="h-full">
				{children}
				{modal}
			</main>
			<Footer />
			<Modal />
		</>
	);
}
