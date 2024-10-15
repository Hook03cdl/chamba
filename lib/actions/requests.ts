"use server";
import { ContentToastProps } from "../hooks/useToast";
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

export async function updateRequestStatus(
  _prevState: ContentToastProps,
  requestId: string,
  status: string
): Promise<ContentToastProps> {
  const session = await getToken("session");

  try {
    await fetch(`http://127.0.0.1:8000/api/requests/${requestId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session}`,
      },
      body: JSON.stringify({ status }),
    });
    return {
      title: "Solicitud actualizada",
      msg: "La solicitud se ha actualizado con exito",
      type: "success",
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Error!",
      msg: "A ocurrido un problema al momento de intentar efectuar los cambios",
      type: "error",
    };
  }
}
