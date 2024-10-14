import { ChambaProps } from "@/lib/interfaces/interface";
import Card from "@/components/Card";
import Each from "@/components/Each";
import { fetchDataChambasWorker } from "@/lib/data/chambas";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
	const chambas = await fetchDataChambasWorker();
	return (
		<section className="p-5 min-h-svh">
			<Link href={"/dashboard/chambas/create"}>
				<Button>Crear Chamba</Button>
			</Link>
			<div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-5 mt-4">
				<Each
					of={chambas || []}
					render={(c: ChambaProps) => (
						<Card
							href={`/dashboard/chambas/edit/${c.slug}`}
							src={c.path}
							id={c.id.toString()}
							name={`${c.title}`}
							description={c.description}
							rating={c.rating}
							worker_name={c.worker_name}
							job_name={c.trabajo_name}
						/>
					)}
				/>
			</div>
		</section>
	);
}
