import UpdateJobs from "@/components/profile/info/UpdateJobs";

export default function Page() {
    return (
        <div className={"flex flex-col gap-2"}>
            <h1 className={"font-medium text-shark"}>Actualiza tus habilidades.</h1>
            <UpdateJobs/>
        </div>
    );
}