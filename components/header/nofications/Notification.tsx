import RelativeTime from '@/components/ui/RelativeTime';
import Link from 'next/link';

interface NotificacionProps {
	id: number | string;
	title: string;
	msg: string;
	date: Date;
	read_at?: boolean;
}

export default function Notification({
	id,
	msg,
	title,
	date,
	read_at,
}: NotificacionProps) {
	return (
		<Link href={`/notification/?id=${id}`}>
			<div
				className={`${read_at ? 'bg-zinc-100' : 'bg-zinc-200'} p-2 rounded-md`}
			>
				<div className="flex justify-between">
					<h4 className="font-semibold text-xs text-shark">{title}</h4>
					<p className="text-xs text-shark/90">
						<RelativeTime dateTime={date} />
					</p>
				</div>
				<p className="line-clamp-2 text-sm">{msg}</p>
			</div>
		</Link>
	);
}
