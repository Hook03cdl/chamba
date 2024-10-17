import { Star, StarHalf } from 'lucide-react';

function StarComponent({ filled, half }: { filled?: boolean; half?: boolean }) {
	return (
		<span className="text-gray-400">
			{filled ? <Star size={16} /> : half ? <StarHalf size={16} /> : null}
		</span>
	);
}

export default function Rating({ rating }: { rating: number }) {
	const fullStars = Math.floor(rating / 2);
	const halfStar = rating % 2 >= 1 ? 1 : 0;
	const emptyStars = 5 - fullStars - halfStar;

	return (
		<div className="flex gap-1">
			{Array.from({ length: fullStars }).map((_, i) => (
				<StarComponent key={`full-${i}`} filled={true} />
			))}
			{halfStar === 1 && <StarComponent half={true} />}
			{Array.from({ length: emptyStars }).map((_, i) => (
				<StarComponent key={`empty-${i}`} />
			))}
		</div>
	);
}
