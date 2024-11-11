

import { fetchDataJobs } from '@/lib/data/jobs';
import Logo from '../ui/Logo';
import Separator from '../ui/Separator';

export default async function Footer() {
	const jobs = await fetchDataJobs();
	return (
		<footer className="p-10 bg-niagara-500 text-white">
			<div className="flex flex-row gap-6">
				<Logo />
				<p>
					Este proyecto es una plataforma innovadora diseñada para conectar a
					profesionales con oportunidades laborales en diversas industrias.
					Nuestro objetivo es proporcionar una experiencia de usuario fluida y
					eficiente, facilitando la búsqueda de empleo y la gestión de
					aplicaciones. Con una interfaz intuitiva y herramientas avanzadas, los
					usuarios pueden explorar ofertas de trabajo, postularse a posiciones y
					seguir el progreso de sus aplicaciones en tiempo real. Además,
					ofrecemos recursos y guías para ayudar a los candidatos a mejorar sus
					habilidades y prepararse para entrevistas. Únete a nuestra comunidad y
					descubre cómo podemos ayudarte a alcanzar tus metas profesionales.
				</p>
			</div>
			<div className="mt-2">
				<span className="font-bold">Trabajos</span>
				<ul className="grid grid-cols-5 gap-2 mt-3">
					{jobs?.map((job) => (
						<li key={job.id}>{job.name}</li>
					))}
				</ul>
			</div>
			<Separator className="w-full" />
			<div className="flex flx-row gap-2">
				<span className="font-bold uppercase">CHAMBA</span>
				<span className="text-slate-200">© Copyright reserved 2024</span>
			</div>
		</footer>
	);
}
