export interface UserProps {
	id: number;
	name: string;
	email: string;
	src: string | null;
	email_verified_at: boolean | null;
	rating: number;
	phone_number: string | null;
	role: number;
	street: string | null;
	postal_code: string | null;
	city: string | null;
	created_at: string | null;
	updated_at: string | null;
	job_name: string;
	worker_name: string;
}

export interface ChambaProps {
	id: number;
	title: string;
	description: string;
	rating: number;
	job_id: number;
	worker_id: number;
	created_at: string;
	updated_at: string;
	trabajo_name: string;
	worker_name: string;
}

export interface ReviewsProps {
	id: number;
	request_chamba_id: number;
	chamba_id: number;
	client_id: number;
	worker_id: number;
	rating: number;
	comment: string;
	created_at: string;
	updated_at: string;
}