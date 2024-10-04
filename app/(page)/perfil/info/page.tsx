import FormUpdateJobs from '@/components/profile/info/FormUpdateJobs';

export default function Page() {
	return (
		<div className={'flex flex-col gap-2'}>
			<h1 className={'font-medium text-shark'}>Actualiza tus habilidades.</h1>
			<FormUpdateJobs />
		</div>
	);
}
