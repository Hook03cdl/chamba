"use server";

import {getToken} from "@/lib/utils/tokens";

export async function storeMessage(chatUuid: String, body: String) {
    const session = await getToken("session");

    try {
        const response = await fetch(`http://localhost:8000/api/chat/${chatUuid}/messages`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${session}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({body: body})
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}