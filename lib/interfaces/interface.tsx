export interface UserProps {
	id: number;
	name: string;
	email: string;
	src: string | null;
	email_verified_at: boolean | null;
	rating: number;
	phone_number: string | null;
	role: string;
	street: string | null;
	postal_code: string | null;
	city: string | null;
	created_at: string | null;
	updated_at: string | null;
	job_name: string;
	worker_name: string;
}

export interface JobProps {
	id: string;
	name: string;
	description: string;
	created_at: string;
	updated_at: string;
}

export interface ChambaProps {
	id: string;
	title: string;
	description: string;
	rating: number;
	job_id: number;
	worker_id: number;
	created_at: string;
	updated_at: string;
	trabajo_name: string;
	worker_name: string;
	slug: string;
}

export interface ReviewsProps {
	id: string;
	request_chamba_id?: string;
	chamba_id?: string;
	client_id?: string;
	worker_id?: string;
	rating?: string;
	comment?: string;
	client_name?: string;
	created_at?: string;
	updated_at?: string;
}

export interface DataDashboardProps {
	requests: string
	chambas: string;
}