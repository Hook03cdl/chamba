import Gallery from '@/components/profile/Gallery';

export default function Page() {
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
	return <Gallery photos={photos} />;
}
