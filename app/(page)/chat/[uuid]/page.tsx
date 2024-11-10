"use client"

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {MessageProps} from "@/lib/interfaces/interface";
import {getChatMessages} from "@/lib/data/chats";
import Each from "@/components/Each";
import {storeMessage} from "@/lib/actions/chats";

{/*
    TODO Implementar el chat que fetchee los mensajes cada 5 segundos
*/
}

export default function Page() {
    const [messages, setMessages] = useState<MessageProps[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");
    const params = useParams();

    useEffect(() => {
        const fetchMessages = async () => {
            const messages = await getChatMessages(String(params.uuid));
            setMessages(messages);
        }

        fetchMessages();
        const intervalId = setInterval(() => {
            fetchMessages();
        }, 2000 * 5);
        return () => clearInterval(intervalId);
    }, [params.uuid]);

    const handleMessage = async () => {
        if (newMessage.trim() !== "") {
            await storeMessage(String(params.uuid), newMessage);
            setNewMessage("");
            const updatedMessages = await getChatMessages(String(params.uuid));
            setMessages(updatedMessages);
        }
    }

    return (
        <div>
            <h1>Chat {params.chat_id}</h1>
            <div>
                {messages.length === 0 ? (
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
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
                <p>{newMessage}</p>
                <button onClick={handleMessage}>Send</button>
            </div>
        </div>
    );
}