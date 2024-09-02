import Gallery from '@/components/servicio/Gallery';
import { Camera } from 'lucide-react';

const photos = [
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
	'/images/notFound.png',
];

export default function page() {
	return <Gallery photos={photos} />;
}
