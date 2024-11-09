export interface UserProps {
    id: number;
    name: string;
    email: string;
    about_me: string | null;
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

export interface JobContainerProps {
    jobs: JobProps[];
}

export interface JobProps {
    id: string;
    name: string;
    slug: string;
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
    job_name: string;
    worker_name: string;
    worker_slug: string;
    slug: string;
    image_id: string;
    path: string;
}

export interface ChambaContainerProps {
    chamba: ChambaProps[];
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
    requests: string;
    chambas: string;
    images: string;
    chambasRealizadas: string;
}

export interface PlanProps {
    name: string;
    price: string;
    benefits: string[];
}

export interface ImageProps {
    id: string;
    image: string;
    alt: string;
    path: string;
    user_id: string;
}

export interface RequestProps {
    id: string;
    client_id: string;
    worker_id: string;
    chamba_id: string;
    message: string;
    status: string;
    start_date: Date;
    end_date: Date;
    created_at: string;
    updated_at: string;
    client_name: string;
    chamba_slug: string;
    worker_name: string;
    chamba_name: string;
}

export interface UserMessageProps {
    id: string;
    name: string;
}

export interface MessageProps {
    id: string;
    body: string;
    user_id: string;
    chat_id: string;
    user: UserMessageProps;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    message: string;
}

export interface ChatProps {
    id: string;
    uuid: string;
    client_id: string;
    worker_id: string;
    message: string;
    created_at: string;
    updated_at: string;
    client: object;
    worker: object;
    request_chamba: object;
}
