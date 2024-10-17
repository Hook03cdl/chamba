import GallerySlider from '@/components/profile/GallerySlider';
import { getImages } from '@/lib/actions/dashboard/gallery';
import { fetchDataUser } from '@/lib/data/user';
import getRole from '@/lib/utils/getRole';

export default async function ProfilePage() {
	const role = await getRole();
	const user = await fetchDataUser();
	const images = await getImages();

	return (
		<>
			{role === '0' ? (
				<div className="grid grid-cols-2 grid-rows-1 gap-4">
					<div>
						<GallerySlider images={images} />
					</div>
					<div className="flex flex-col gap-4">
						<p>{user?.about_me}</p>
						<div>
							<p className="text-gray-500 text-xs">Nombre: </p>
							<p>{user?.name}</p>
						</div>
						<div>
							<p className="text-gray-500 text-xs">Email: </p>
							<p>{user?.email}</p>
						</div>
						<div>
							<p className="text-gray-500 text-xs">Telefono: </p>
							<p>{user?.phone_number}</p>
						</div>
						<div>
							<p className="text-gray-500 text-xs">Direccion: </p>
							<p>{user?.street}</p>
						</div>
						<div>
							<p className="text-gray-500 text-xs">Codigo Postal: </p>
							<p>{user?.postal_code}</p>
						</div>
					</div>
				</div>
			) : (
				<div>
					<h1>{user?.name}</h1>
					<h1>{user?.email}</h1>
					<h1>{user?.rating}</h1>
					<h1>{user?.phone_number}</h1>
					<h1>{user?.street}</h1>
					<h1>{user?.postal_code}</h1>
					<h1>{user?.city}</h1>
				</div>
			)}
		</>
	);
}
