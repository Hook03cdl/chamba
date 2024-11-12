import {UserProps} from "@/lib/interfaces/interface";

export async function fetchWorkers(): Promise<UserProps[]> {
    try {
        const response = await fetch("http://localhost:8000/api/workers", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}