import Gallery from '@/components/profile/Gallery';
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
