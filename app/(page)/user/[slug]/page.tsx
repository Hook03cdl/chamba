import ButtonEditProfile from "@/components/profile/ButtonEditProfile";
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
  return (
    <section className="min-h-svh p-5">
      <div className="flex items-center gap-10">
      </div>
    </section>
  );
}
