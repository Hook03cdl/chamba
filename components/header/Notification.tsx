import { ArchiveX, Bell } from 'lucide-react';
import Popover from '../ui/Popover';
import Each from '../Each';

export default function Notification() {
	const notifications: any[] = [];

	return (
		<Popover
			fallback={
				<span className="text-gray-600">
					<Bell size={28} />
				</span>
			}
		>
			<div className="min-w-72 h-96 overflow-y-auto">
				{notifications.length > 0 ? (
					<Each of={notifications} render={(e) => <div>Hola {e}</div>} />
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
