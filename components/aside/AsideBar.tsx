import Dropdown from '@/components/ui/Dropdown';
import NavLink from './NavLink';
import Logo from '../ui/Logo';
import { Checkbox } from '../ui/Inputs';
import { fetchDataJobs } from '@/lib/data/jobs';

export default async function AsideBar() {
	const jobs = (await fetchDataJobs()) ?? [];
	return (
		<aside className="sticky top-0 left-0 overflow-y-auto flex flex-col items-center gap-24 w-72 h-screen bg-niagara-500 p-5 py-10">
			<div>
				<Logo />
			</div>
			<div className="h-full w-full flex flex-col gap-3">
				<Dropdown text="Menu">
					<NavLink href={'/login'}>Login</NavLink>
					<NavLink href={'/signup'}>Signup</NavLink>
				</Dropdown>
				<Dropdown text="Menu">
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
				</Dropdown>
				<Dropdown text="Menu">
					<div className="flex gap-3 flex-wrap p-2">
						{jobs.map((job) => (
							<Checkbox key={job.id} label={job.name} />
						))}
					</div>
				</Dropdown>
				<NavLink href="/pruebas" className="text-white bg-niagara-400">
					Pruebas
				</NavLink>
			</div>
		</aside>
	);
}
