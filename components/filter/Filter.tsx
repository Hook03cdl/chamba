import { SlidersHorizontal } from 'lucide-react';
import Jobs from './Jobs';
import Slide from '../ui/Slide';

export default async function Filter() {
	return (
		<div className="mt-5">
			<Slide buttonContent={<SlidersHorizontal />}>
				<Jobs />
			</Slide>
		</div>
		// <div className="mt-5 flex">
		// 	<Jobs />
		// 	<div className="flex flex-row justify-center items-center">
		// 		<SlidersHorizontal />
		// 	</div>
		// </div>
	);
}
