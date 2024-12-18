import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ShowToasts from '@/components/ShowToast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Chamba',
	description:
		'Con nostros podras encontrar desde un trabajo hasta alguien que te realice un trabaje ',
	icons: { icon: '/logo.png' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<ShowToasts />
			</body>
		</html>
	);
}
