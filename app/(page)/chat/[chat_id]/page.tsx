"use client"

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {MessageProps} from "@/lib/interfaces/interface";
import {getChatMessages} from "@/lib/data/chats";
import Each from "@/components/Each";

{/*
    TODO Implementar el chat que fetchee los mensajes cada 5 segundos
*/
}

export default function Page() {
    const [messages, setMessages] = useState<MessageProps[] | []>([]);
    const params = useParams();

    useEffect(() => {
        const fetchMessages = async () => {
            const messages = await getChatMessages(String(params.chat_id));
            setMessages(messages);
        }

        fetchMessages();
        const intervalId = setInterval(() => {
            fetchMessages();
        }, 2000 * 5);
        return () => clearInterval(intervalId);
    }, [params.chat_id]);

    return (
        <div>
            <h1>Chat {params.chat_id}</h1>
            <div>
                {messages.message ? (
                    <span>No Messages Found</span>
                ) : (

                    <Each of={messages} render={(m: MessageProps) => (
                        <div key={m.id}>
                            <p>{m.body}</p>
                            <p>{m.user_id}</p>
                            <p>{m.user.name}</p>
                        </div>
                    )}/>
                )}
            </div>
            <div>
                <input type="text"/>
                <button>Send</button>
            </div>
        </div>
    );
}