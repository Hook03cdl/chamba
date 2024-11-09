'use server';
import {ContentToastProps} from '@/lib/hooks/useToast';
import {getToken} from '@/lib/utils/tokens';
import {ImageProps} from '@/lib/interfaces/interface';

export async function uploadImage(
    state: { toast: ContentToastProps; image?: ImageProps },
    formData: FormData
): Promise<{ toast: ContentToastProps; image?: ImageProps }> {
    const session = await getToken('session');

    const data = {
        image: formData.get('image'),
        alt: formData.get('alt'),
    };

    if (!data.image || !data.alt) {
        return {
            toast: {
                title: 'Campos vacios',
                msg: 'Necesitas llenar todos lo campos, de lo contario no podras subir la imagen.',
                type: 'warning',
            }
        };
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/images', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${session}`,
                Accept: 'application/json',
            },
            body: formData,
        });

        const newImage = await response.json();

        return {
            toast: {
                title: 'Imagen subida',
                msg: 'La imagen se a subido correctamente a tu galeria.',
                type: 'success',
            },
            image: newImage,
        };
    } catch (error) {
        console.error(error);
        return {
            toast: {
                title: 'Error!',
                msg: 'A ocurrido un problema al momento de intentar efectuar los cambios',
                type: 'error',
            }
        };
    }
}

export async function getImages(): Promise<ImageProps[] | []> {
    const session = await getToken('session');

    try {
        const response = await fetch('http://127.0.0.1:8000/api/images', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${session}`,
                Accept: 'application/json',
            },
        });
        const data = await response.json();
        return data.images;
    } catch (error) {
        console.error(error);
    }
    return [];
}

export async function destroyImage(
    _prevState: ContentToastProps,
    formData: FormData
): Promise<ContentToastProps> {
    const session = await getToken('session');
    try {
        await fetch(`http://127.0.0.1:8000/api/images/${formData.get('id')}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${session}`,
            },
            body: formData,
        });

        return {
            title: 'Imagen eliminada',
            msg: 'La imagen se a eliminado correctamente de tu galeria.',
            type: 'success',
        };
    } catch (error) {
        console.error(error);
        return {
            title: 'Error!',
            msg: 'A ocurrido un problema al momento de intentar efectuar los cambios',
            type: 'error',
        };
    }
}
