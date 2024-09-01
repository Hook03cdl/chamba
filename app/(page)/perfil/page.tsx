"use client"

import { Button } from "@/components/ui/button";
import Popover from "@/components/ui/Popover";
import {UserRoundPlus, Ellipsis, Camera} from "lucide-react";

export default function page() {
	return(
		<section>
			<div className="p-5 flex justify-center space-x-32">
				<div>
					<img src="/images/nata.jpg" alt="foto de perfil" className="rounded-full cursor-pointer" />
				</div>
				<div>
					<div>
						<p>Natanael Cano</p>
						<div className="flex space-x-2 mt-5">
							<div className="bg-niagara-100 text-gray-300 rounded-full p-1 text-xs">
								<p>carpintero</p>
							</div>
							<div className="bg-niagara-100 text-gray-300 rounded-full p-1 text-xs">
								<p>Albañil</p>
							</div>
						</div>
						<div className="space-x-6 mt-5 flex items-center">
							<Button>mensaje</Button>
							<button className="p-2 rounded-md border-2 border-black hover:bg-gray-100">
								<UserRoundPlus></UserRoundPlus>
							</button>
							<Popover fallback={<Ellipsis></Ellipsis>}>
								<button className="p-2 block hover:bg-gray-200 w-100">Eliminar</button>
								<button className="p-2 block hover:bg-gray-200 w-100">Bloquear</button>
								<button className="p-2 block hover:bg-gray-200 w-100">Reportar</button>
							</Popover>
						</div>
					</div>
				</div>
			</div>
			<div className="h-1 w-100 bg-niagara-200"></div>
			<div className="mt-5">
				<div className="flex justify-center">
					<Camera></Camera>
					<h2 className="ms-2">Galería</h2>
				</div>
				<div className="grid grid-cols-3 place-items-center gap-5 mt-5">
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
					<img src="/images/nata.jpg" alt="image" className="h-50 w-50"/>
				</div>
			</div>
		</section>
	);	
}
