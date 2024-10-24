"use server";
import { getToken } from "../utils/tokens";

export async function markAsRead(id: string | number) {
  const session = await getToken("session");
  try {
    await fetch(`http://localhost:8000/api/notifications/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${session}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
}