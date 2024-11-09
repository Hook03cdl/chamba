import { ArchiveX, Bell } from 'lucide-react';
import Popover from '../../ui/Popover';
import Each from '../../Each';
import { getUserNotifications } from '@/lib/data/notifications';
import Notification from './Notification';
import ButtonViewAll from './ButtonViewAll';

export default async function Notifications() {
	// const notifications = [ 
	// 	{
	// 		id: 1,
	// 		title: 'Titulo',
	// 		msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti maiores recusandae, sint quae perspiciatis error. Odio repellat reprehenderit voluptatem ab vero! Velit beatae ea numquam sapiente alias mollitia ipsa!',
	// 		date: '2024-10-17 02:06:59',
	// 		read_at: true,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Titulo',
	// 		msg: 'lorem ipsum',
	// 		date: '2024-10-17 02:07:00',
	// 		read_at: false,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Titulo',
	// 		msg: 'lorem ipsum',
	// 		date: '2024-10-17 02:07:00',
	// 		read_at: false,
	// 	},
	// 	{
	// 		id: 4,
	// 		title: 'Titulo',
	// 		msg: 'lorem ipsum',
	// 		date: '2024-09-11 02:07:00',
	// 		read_at: false,
	// 	},
	// 	{
	// 		id: 5,
	// 		title: 'Titulo',
	// 		msg: 'lorem ipsum',
	// 		date: '2024-10-17 02:07:00',
	// 		read_at: false,
	// 	},
	// 	{
	// 		id: 6,
	// 		title: 'Titulo',
	// 		msg: 'lorem ipsum',
	// 		date: '2024-10-17 02:07:00',
	// 		read_at: false,
	// 	},
	// 	{
	// 		id: 7,
	// 		title: 'Titulo',
	// 		msg: 'lorem ipsum',
	// 		date: '2024-10-17 02:07:00',
	// 		read_at: false,
	// 	},
	// 	{
	// 		id: 8,
	// 		title: 'Titulo',
	// 		msg: 'lorem ipsum',
	// 		date: '2024-10-17 02:07:00',
	// 		read_at: false,
	// 	},
	// 	{
	// 		id: 9,
	// 		title: 'Titulo',
	// 		msg: 'lorem ipsum',
	// 		date: '2024-10-17 02:07:00',
	// 		read_at: false,
	// 	},
	// 	{
	// 		id: 10,
	// 		title: 'Titulo',
	// 		msg: 'lorem ipsum',
	// 		date: '2024-10-17 02:07:00',
	// 	},
	// ];

	const notifications = await getUserNotifications();

	return (
		<Popover
			fallback={
				<div className="relative text-gray-600">
					<Bell size={28} />
					{notifications.length > 0 && (
						<div className="absolute top-0 right-0 size-3 grid place-content-center rounded-full bg-red-600" />
					)}
				</div>
			}
		>
			<div className="min-w-72 ">
				{notifications.length > 0 ? (
					<div>
						<ButtonViewAll />
						<div className="grid gap-1 pr-1 h-auto max-h-96 overflow-y-auto change-scroll">
							<Each
								of={notifications}
								render={(n, i) => (
									<Notification
										id={n.id}
										title={n.title}
										msg={n.msg}
										date={n.date}
										read_at={n.read_at}
										key={i}
									/>
								)}
							/>
						</div>
					</div>
				) : (
					<div className="h-96 w-full flex flex-col justify-center items-center">
						<ArchiveX size={50} />
						<p className="max-w-48 text-center text-xs">
							Aun no has recibido una notificacion
						</p>
					</div>
				)}
			</div>
		</Popover>
	);
}
