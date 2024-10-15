import { getToken } from "../utils/tokens";

export async function getUserNotifications() {
  const session = await getToken("session");
  try {
    const response = await fetch("http://127.0.0.1:8000/api/notifications", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session}`,
      },
    });
    const data = await response.json();
    return data.notifications;
  } catch (error) {
    console.error(error);
  }
}
