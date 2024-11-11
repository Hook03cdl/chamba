export interface NotificationProps {
	id: string;
	type: string;
	notifiable_type: string;
	notifiable_id: number;
	data: Data;
	read_at: null;
	created_at: Date;
	updated_at: Date;
}

export interface Data {
	title: string;
	message: string;
}
