import RequestChamba from "@/components/RequestChamba";
import Review from "@/components/Review";
import { fetchDataChamba } from "@/lib/data/chambas";
import fetchReviewsData from "@/lib/data/reviews";
import { ReviewsProps } from "@/lib/interfaces/interface";

export default async function Page({ params }) {
  const chamba = await fetchDataChamba(params.sid);
  const reviews = await fetchReviewsData(chamba.id);
  console.log(reviews);
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4">
      <div className="col-span-2 bg-white h-screen rounded-md shadow-md">
        <h1 className="text-2xl font-bold">{chamba.title}</h1>
        <p className="text-sm">{chamba.description}</p>
        <span>{chamba.job_name}</span>
        <span>{chamba.worker_name}</span>
      </div>
      <div className="col-start-3 bg-white h-screen rounded-md shadow-md">
        {" "}
        <RequestChamba />{" "}
      </div>
      <div className="col-span-3 row-start-2 bg-white rounded-md shadow-md">
        {reviews?.map((review: ReviewsProps) => (
          <Review
            key={review.id}
            id={review.id}
            request_chamba_id={review.request_chamba_id}
            chamba_id={review.chamba_id}
            client_id={review.client_id}
            worker_id={review.worker_id}
            rating={review.rating}
            comment={review.comment}
          />
        ))}
      </div>
    </div>
  );
}
