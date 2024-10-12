"use server"
import { getToken } from "../utils/tokens";

export async function fetchRequests() {
  const session = await getToken("session");

  try {
    const response = await fetch("http://127.0.0.1:8000/api/requests", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session}`,
      },
    });
    const data = await response.json();
    return data.requests;
  } catch (error) {
    console.error(error);
  }
}
