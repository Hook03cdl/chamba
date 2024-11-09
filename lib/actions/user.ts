"use server";
import {getToken} from "@/lib/utils/tokens";

export async function followUser($followedId: string) {
    const session = await getToken("session");

    try {
        const response = await fetch(`http://localhost:8000/api/follow/${$followedId}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                Authorization: `Bearer ${session}`,
            }
        });
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}