import { ArchiveX, Bell } from 'lucide-react';
import Popover from '../ui/Popover';
import Each from '../Each';
import Separator from '../ui/Separator';
import Link from 'next/link';
import RelativeTime from '../ui/RelativeTime';

export default async function Notifications() {
	const notifications = [
		{
			id: 1,
			title: 'Titulo',
			msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deleniti maiores recusandae, sint quae perspiciatis error. Odio repellat reprehenderit voluptatem ab vero! Velit beatae ea numquam sapiente alias mollitia ipsa!',
			date: '2024-10-17 02:06:59',
		},
		{ id: 2, title: 'Titulo', msg: 'lorem ipsum', date: '2024-10-17 02:07:00' },
		{ id: 3, title: 'Titulo', msg: 'lorem ipsum', date: '2024-10-17 02:07:00' },
		{ id: 4, title: 'Titulo', msg: 'lorem ipsum', date: '2024-10-17 02:07:00' },
		{ id: 5, title: 'Titulo', msg: 'lorem ipsum', date: '2024-10-17 02:07:00' },
		{ id: 6, title: 'Titulo', msg: 'lorem ipsum', date: '2024-10-17 02:07:00' },
		{ id: 7, title: 'Titulo', msg: 'lorem ipsum', date: '2024-10-17 02:07:00' },
		{ id: 8, title: 'Titulo', msg: 'lorem ipsum', date: '2024-10-17 02:07:00' },
		{ id: 9, title: 'Titulo', msg: 'lorem ipsum', date: '2024-10-17 02:07:00' },
		{
			id: 10,
			title: 'Titulo',
			msg: 'lorem ipsum',
			date: '2024-10-17 02:07:00',
		},
	];

	return (
		<Popover
			fallback={
				<div className="relative text-gray-600">
					<Bell size={28} />
					<div className="absolute top-0 right-0 size-3 rounded-full bg-red-600" />
				</div>
			}
		>
			<div className="min-w-72  h-auto max-h-96 overflow-y-auto change-scroll">
				{notifications.length > 0 ? (
					<div className="grid gap-1 pr-1">
						<Each
							of={notifications}
							render={(n, i) => (
								<Notification
									id={n.id}
									title={n.title}
									msg={n.msg}
									date={n.date}
									key={i}
								/>
							)}
						/>
					</div>
				) : (
					<div className="h-full w-full flex flex-col justify-center items-center">
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

function Notification({
	id,
	msg,
	title,
	date,
}: {
	id: number | string;
	title: string;
	msg: string;
	date: string;
}) {
	return (
		<Link href={`/notification/${id}`}>
			<div className="bg-zinc-200 p-2 rounded-md">
				<div className="flex justify-between">
					<h4 className="font-semibold text-xs text-shark">{title}</h4>
					<p className="text-xs text-shark/90">
						<RelativeTime dateTime={date} />
					</p>
				</div>
				<p className="line-clamp-1 text-sm">{msg}</p>
			</div>
		</Link>
	);
}
