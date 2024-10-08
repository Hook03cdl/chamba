import CreateForm from "@/components/dashboard/chambas/CreateForm";
import { fetchDataJobs } from "@/lib/data/jobs";
import { fetchJobsUser } from "@/lib/data/user";

export default async function Page() {
  const jobs = await fetchJobsUser();
  return (
    <div>
      <CreateForm jobs={jobs} />
    </div>
  );
}
