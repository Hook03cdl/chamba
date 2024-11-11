export interface MessagesProps {
    body:       string;
    chat_id:    number;
    created_at: Date;
    deleted_at: null;
    id:         number;
    updated_at: Date;
    user:       User;
    user_id:    number;
}

export interface User {
    id:   number;
    name: string;
}
