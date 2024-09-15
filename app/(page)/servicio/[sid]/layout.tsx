/* eslint-disable @next/next/no-img-element */

import ButtonOpenModal from '@/components/profile/ButtonOpenModal';
import Gallery from '@/components/profile/Gallery';
import Navbar from '@/components/profile/Navbar';
import UserActions from '@/components/profile/UserActions';
import { Button } from '@/components/ui/button';
import Popover from '@/components/ui/Popover';
import Separator from '@/components/ui/Separator';
import Tags from '@/components/ui/Tags';
import { fetchDataChamba } from '@/lib/data/chambas';
import fetchReviewsData from '@/lib/data/reviews';
import {
	UserRoundPlus,
	Ellipsis,
	Camera,
	MessageCircleMore,
} from 'lucide-react';

export default async function ServicePage({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { sid: string };
}) {
	const chamba = await fetchDataChamba(params.sid);
	// console.log(chamba);

	return (
		<section className="min-h-svh p-5">
			{children}
		</section>
	);
}
