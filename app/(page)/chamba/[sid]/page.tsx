import Each from '@/components/Each';
import RequestChamba from '@/components/RequestChamba';
import Review from '@/components/Review';
import { fetchDataChamba } from '@/lib/data/chambas';
import fetchReviewsData from '@/lib/data/reviews';
import { ReviewsProps } from '@/lib/interfaces/interface';

export default async function Page({ params }: { params: { sid: string } }) {
	const chamba = await fetchDataChamba(params.sid);
	const reviews = await fetchReviewsData(chamba.id);
	console.log(chamba);

	return (
		<div className="grid grid-cols-3 grid-rows-2 gap-4">
			<div className="col-span-2 bg-white h-screen rounded-md shadow-md">
				<div className="m-4">
					<h1 className="text-gray-800 text-2xl font-bold">{chamba.title}</h1>
				</div>
				<p className="text-sm">{chamba.description}</p>
				<span>{chamba.job_name}</span>
				<span>{chamba.worker_name}</span>
			</div>
			<div className="col-start-3 bg-white h-screen rounded-md shadow-md">
				<RequestChamba worker={chamba.worker_name} chambaTitle={chamba.title} />
			</div>
			<div className="col-span-3 bg-white rounded-md shadow-md p-2">
				<span className="font-bold m-2">Reviews</span>
				<Each
					of={reviews}
					render={(review: ReviewsProps) => (
						<Review
							key={review.id}
							id={review.id}
							request_chamba_id={review.request_chamba_id}
							chamba_id={review.chamba_id}
							client_id={review.client_id}
							worker_id={review.worker_id}
							rating={review.rating}
							comment={review.comment}
							client_name={review.client_name}
						/>
					)}
				/>
			</div>
		</div>
	);
}
