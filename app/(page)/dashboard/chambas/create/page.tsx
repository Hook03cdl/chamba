import CreateForm from "@/components/dashboard/chambas/CreateForm";
import { getImages } from "@/lib/actions/dashboard/gallery";
import { fetchDataJobs } from "@/lib/data/jobs";
import { fetchJobsUser } from "@/lib/data/user";

export default async function Page() {
  const jobs = await fetchJobsUser();
  const images = await getImages();
  return (
    <div>
      <CreateForm jobs={jobs} images={images}/>
    </div>
  );
}
