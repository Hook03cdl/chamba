"use server";
import { getToken } from "@/lib/utils/tokens";

export default async function getData() {
  const session = await getToken("session");

  try {
    const response = await fetch("http://localhost:8000/api/dashboard", {
      headers: {
        Authorization: `Bearer ${session}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
