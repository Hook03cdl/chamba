/* eslint-disable @next/next/no-img-element */
import Each from "@/components/Each";
import ButtonEditProfile from "@/components/profile/ButtonEditProfile";
import JobsOptions from "@/components/profile/info/JobsOptions";
import Navbar from "@/components/profile/Navbar";
import { Button } from "@/components/ui/button";
import Separator from "@/components/ui/Separator";
import Tags from "@/components/ui/Tags";
import { fetchJobsUser, getJobsBySlug, getUserInfoSlug } from "@/lib/data/user";
import { ChartCandlestick, Mailbox, Users, Wrench } from "lucide-react";

export default async function Page({ params }: { params: { slug: string } }) {
  const user = await getUserInfoSlug(params.slug);
  const trabajos = await getJobsBySlug(params.slug);
  const jobs = trabajos?.map((job: any) => job.name);
  console.log(jobs);

  return (
    <section className="min-h-svh p-5">
      <h1 className="m-2 font-semibold text-xl text-gray-800">Galeria del trabajador.</h1>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/images/people-working1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/images/people-working2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/images/people-working3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/images/people-working4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/images/zapatero-oficio.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="http://127.0.0.1:8000/gallery/albanil-1.jpg"
            alt="asd"
          />
        </div>
      </div>
    </section>
  );
}
