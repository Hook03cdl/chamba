"use server";
import {ContentToastProps} from "../hooks/useToast";
import {getToken} from "../utils/tokens";

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
            body: JSON.stringify({status}),
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

export async function storeRequest(
    _prevState: ContentToastProps,
    formData: FormData
): Promise<ContentToastProps> {
    const session = await getToken("session");

    const data = {
        worker_id: formData.get("worker_id"),
        chamba_id: formData.get("chamba_id"),
        message: formData.get("message"),
    };

    if (!data.worker_id || !data.chamba_id || !data.message) {
        return {
            title: "Mensaje vacio",
            msg: "Necesita escribir un mensaje para poder enviar la solicitud",
            type: "warning",
        };
    }

    try {
        await fetch("http://127.0.0.1:8000/api/requests", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${session}`,
                Accept: "application/json",
            },
            body: formData,
        });

        return {
            title: "Solicitud enviada",
            msg: "La solicitud se ha enviado con exito",
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

export async function fetchRequestById(requestId: string) {
    const session = await getToken("session");

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/requests/${requestId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${session}`,
            }
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}