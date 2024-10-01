import CreateForm from "@/components/dashboard/chambas/CreateForm";
import { fetchDataJobs } from "@/lib/data/jobs";

export default async function Page() {
  const jobs = await fetchDataJobs();
  return (
    <div>
      <CreateForm jobs={jobs} />
    </div>
  );
}
