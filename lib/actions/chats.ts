"use server";

import {getToken} from "@/lib/utils/tokens";

export async function storeMessage(chatid: String) {
    const session = await getToken("session");

    try {
        const response = await fetch(`http://localhost:8000/api/chat/${chatid}/messages`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${session}`,
                Accept: "application/json",
            }
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}