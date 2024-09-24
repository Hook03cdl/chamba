import { ReviewsProps } from "@/lib/interfaces/interface";

export default function Review({
  id,
  request_chamba_id,
  chamba_id,
  client_id,
  worker_id,
  rating,
  comment,
}: ReviewsProps) {
  return (
    <div>
      <h1>adal</h1>
      <p>{comment}</p>
    </div>
  );
}
