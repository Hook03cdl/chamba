"use server"

import {getToken} from "@/lib/utils/tokens";
import {ChatProps, MessageProps} from "@/lib/interfaces/interface";
import {Fetch} from "@/lib/Fetch";

export async function getAuthUserChats() {
    const session = await getToken("session");

    try {
        const chats = await fetch("http://localhost:8000/api/user/chats", {

            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${session}`,
            }
        })
        const data = await chats.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getChatMessages(chatId: string) {
    const session = await getToken("session");

    try {
        const messages = await fetch(`http://localhost:8000/api/chat/${chatId}/messages`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${session}`,
                Accept: "application/json",
            }
        })
        const data = await messages.json();
        return data;
    } catch (error) {
        console.error(error);
    }
    return [];
}