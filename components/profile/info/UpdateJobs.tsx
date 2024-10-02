'use client'
import {JobProps} from "@/lib/interfaces/interface";
import {fetchDataJobs} from "@/lib/data/jobs";
import {fetchJobsUser} from "@/lib/data/user";
import {useEffect, useState} from "react";
import JobCheckbox from "@/components/profile/info/JobCheckbox";
import {updateUserJobs} from "@/lib/actions/profile";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {useToasts} from "@/lib/hooks/useToast";

export default function UpdateJobs() {
    const [jobs, setJobs] = useState<JobProps[]>([]);
    const [userJobsIds, setUserJobsIds] = useState<number[]>([]);
    const [checkedJobs, setCheckedJobs] = useState<number[]>([]);
    const router = useRouter();
    const {addToast} = useToasts();

    useEffect(() => {
        async function fetchData() {
            const jobsData = await fetchDataJobs();
            const userJobsData = await fetchJobsUser();
            const userJobsIds = userJobsData?.jobs.map((job: JobProps) => job.id);
            setJobs(jobsData);
            setUserJobsIds(userJobsIds);
            setCheckedJobs(userJobsIds);
        }

        fetchData();
    }, []);

    const handleCheckboxChange = (jobId: number) => {
        setCheckedJobs((prev) =>
            prev.includes(jobId)
                ? prev.filter((id) => id !== jobId)
                : [...prev, jobId]
        );
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const result = await updateUserJobs(checkedJobs);

        if (result.type === 'success') {
            addToast(result.title, result.msg, result.type);
            router.refresh();
        } else {
            addToast(result.title, result.msg, 'warning');
            console.error(result.msg);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={"bg-gray-100 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded border"}>
                {jobs?.map((job: JobProps) => (
                    <JobCheckbox key={job.id} job={job} checked={checkedJobs.includes(job.id)}
                                 onChange={handleCheckboxChange}/>
                ))}
                <div className={"flex w-full justify-start mt-2"}>
                    <Button variant={'default'}>Actualizar</Button>
                </div>
            </div>
        </form>
    );
}