import FormUpdateJobs from '@/components/profile/info/FormUpdateJobs';
import UpdatePassword from '@/components/profile/info/UpdatePassword';

export default function Page() {
	return (
		<div className={'flex flex-col gap-2'}>
			<h1 className={'font-medium text-shark'}>Actualiza tus habilidades.</h1>
			<FormUpdateJobs />
			<h1 className={'font-medium text-shark'}>Actualiza tu contrasena</h1>
			<UpdatePassword />
		</div>
	);
}
