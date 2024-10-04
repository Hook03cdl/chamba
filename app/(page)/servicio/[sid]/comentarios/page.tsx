import RelativeTime from '@/components/ui/RelativeTime';
import fetchReviewsData from '@/lib/data/reviews';
import { ReviewsProps } from '@/lib/interfaces/interface';
import '@github/relative-time-element';
import { UserCircle } from 'lucide-react';

export default async function Page({ params }: { params: { sid: string } }) {
	const reviews = (await fetchReviewsData(params.sid)) ?? [];

	return (
		<div className="divide-y-2">
			{reviews.map((r: ReviewsProps) => (
				<div key={r.id} className="py-3 space-y-5 shadow-md p-5">
					<div className="flex items-center gap-5">
						<div>
							<UserCircle size={40} />
							<h1 className="text-lg font-semibold">User name</h1>
						</div>
						<span className="p-1 px-2 rounded-full text-humo text-sm font-medium bg-niagara-500">
							{r.rating}
						</span>
					</div>
					<p>{r.comment}</p>
					<span className="text-xs text-shark">
						{r.created_at && <RelativeTime dateTime={r.created_at} />}
					</span>
				</div>
			))}
		</div>
	);
}
