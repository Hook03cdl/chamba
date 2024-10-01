"use server";
import {Fetch} from "@/lib/Fetch";
import {getToken} from "../../utils/tokens";
import {slugify} from "@/lib/utils";

export async function createChamba(formData: FormData) {
    const session = await getToken("session");
    const data = {
        title: formData.get("title"),
        description: formData.get("description"),
        slug: slugify(formData.get("title") as string),
        job_id: formData.get("job_id"),
    };

    if (!data.title || !data.description || !data.job_id) {
        return {
            title: "Campos vacios",
            msg: "Necesitas llenar todos lo campos, de lo contario no podras guardar los cambios",
            type: "warning",
        };
    }

    try {
        await Fetch("/chamba", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${session}`,
            },
            body: formData,
        });
    } catch (error) {
        console.error(error);
        return {
            title: "Error!",
            msg: "A ocurrido un problema al momento de intentar efectuar los cambios",
            type: "error",
        };
    }
}

export async function updateChambaWorker(_prevState: any, formData: FormData) {
    const session = await getToken("session");
    const data = {
        id: formData.get("id"),
        title: formData.get("title"),
        description: formData.get("description"),
        worker_id: formData.get("worker_id"),
        slug: formData.get("slug"),
        job_id: formData.get("job_id"),
    };

    console.log(data);

    // if (!data.title || !data.description || !data.job_id) {
    //   return {
    //     title: "Campos vacios",
    //     msg: "Necesitas llenar todos lo campos, de lo contario no podras guardar los cambios",
    //     type: "warning",
    //   };
    // }

    try {
        await fetch(`http://localhost:8000/api/chamba/${data.id}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${session}`,
            },
            body: formData,
        });
    } catch (error) {
        console.error(error);
        return {
            title: "Error!",
            msg: "A ocurrido un problema al momento de intentar efectuar los cambios",
            type: "error",
        };
    }
}
