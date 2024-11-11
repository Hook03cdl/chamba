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
	);
}
