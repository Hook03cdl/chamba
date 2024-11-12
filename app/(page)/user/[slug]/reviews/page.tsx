import Review from "@/components/Review";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold">Reviews</h1>
      <Review
        id="1"
        rating="4.6"
        comment="El mejor trabajador si quieres poner piso en tu sala."
        client_name="Adalberto Garcia"
      />
      <Review
        id="2"
        rating="4.9"
        comment="Me puso mi piso en mi casa, sin duda en contratar sus servicios."
        client_name="Edgar Antonio Cruz"
      />
      <Review
        id="3"
        rating="4.7"
        comment="Excelente trabajo, muy profesional."
        client_name="Luis Alberto"
      />
      <Review
        id="1"
        rating="4.6"
        comment="El mejor trabajador si quieres poner piso en tu sala."
        client_name="Adalberto Garcia"
      />
    </div>
  );
}
