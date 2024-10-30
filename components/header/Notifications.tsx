import { ArchiveX, Bell } from 'lucide-react';
import Popover from '../ui/Popover';
import Each from '../Each';
import Noti from './Noti';

export default function Notifications({ notifications }: { notifications: any }) {

	return (
		<Popover
			fallback={
				<div className="relative text-gray-600">
					<Bell size={28} />
					<div className="absolute top-0 right-0 size-3 rounded-full bg-red-600" />
				</div>
			}
		>
			<div className="min-w-80 h-auto max-h-96 overflow-y-auto change-scroll">
				{notifications?.length > 0 ? (
					<div className="grid gap-1 pr-1">
						<Each
							of={notifications}
							render={(n, i) => (
								<Noti
									id={n.id}
									title={n.data.title}
									msg={n.data.msg}
									read_at={n.read_at}
									created_at={n.created_at}
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