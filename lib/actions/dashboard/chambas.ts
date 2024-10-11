"use server";
import { Fetch } from "@/lib/Fetch";
import { getToken } from "../../utils/tokens";
import { slugify } from "@/lib/utils";
import { ContentToastProps } from "@/lib/hooks/useToast";

export async function createChamba(
  _prevState: ContentToastProps,
  formData: FormData
): Promise<ContentToastProps> {
  const session = await getToken("session");
  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    slug: slugify(formData.get("title") as string),
    image_id: formData.get("image_id"),
    job_id: formData.get("job_id"),
  };

  if (!data.title || !data.description || !data.job_id || !data.image_id) {
    return {
      title: "Campos vacios",
      msg: "Necesitas llenar todos lo campos, de lo contario no podras guardar los cambios",
      type: "warning",
    };
  }

  try {
    await fetch("http://127.0.0.1:8000/api/chamba", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session}`,
        'Accept': 'application/json',
      },
      body: formData,
    })
    return {
      title: "Chamba creada",
      msg: "La chamba se ha creado con exito",
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

export async function updateChambaWorker(
  _prevState: ContentToastProps,
  formData: FormData
): Promise<ContentToastProps> {
  const session = await getToken("session");
  const data = {
    id: formData.get("id"),
    title: formData.get("title"),
    description: formData.get("description"),
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
    await fetch(`http://localhost:8000/api/chamba/${data.id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session}`,
      },
      body: formData,
    });
    return {
      title: "Chamba actualizada",
      msg: "Los cambios se han realizado con exito",
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

export async function deleteChambaWorker(
  _prevState: ContentToastProps,
  formData: FormData
): Promise<ContentToastProps> {
  const session = await getToken("session");
  const data = {
    id: formData.get("id"),
  };
  try {
    await fetch(`http://localhost:8000/api/chamba/${data.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${session}`,
      },
    });
    return {
      title: "Chamba eliminada",
      msg: "La chamba se ha eliminado con exito",
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
