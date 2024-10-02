'use server';

// import { redirect } from 'next/navigation';
import {Fetch} from '../Fetch';
import {ContentToastProps} from '../hooks/useToast';
import {getToken} from '../utils/tokens';

export async function editDataUser(
    _prevState: ContentToastProps,
    formData: FormData
): Promise<ContentToastProps> {
    const session = await getToken('session');

    const data = {
        name: formData.get('name'),
        phone: formData.get('phone_number'),
        city: formData.get('city'),
        code: formData.get('postal_code'),
        street: formData.get('street'),
    };

    if (!data.name || !data.phone || !data.city || !data.code || !data.street) {
        return {
            title: 'Campos vacios',
            msg: 'Necesitas llenar todos lo campos, de lo contario no podras guardar los cambios',
            type: 'warning',
        };
    }

    try {
        await Fetch('/user/updateProfile', {
            headers: {Authorization: `Bearer ${session}`},
            method: 'POST',
            body: formData,
        });
        return {
            title: 'Usuario actializado',
            msg: 'Los cambios se han realizado con exito',
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

export async function updateUserJobs(checkedJobs: number[]) {

    const session = await getToken('session');

    if (checkedJobs.length === 0 ) {
        return {
            title: 'Campos vacios',
            msg: 'Necesitas seleccionar al menos un trabajo, de lo contario no podras guardar los cambios',
            type: 'warning',
        };

    }

    try {
        await Fetch('/user/updateJobs', {
            method: 'POST',
            headers: {Authorization: `Bearer ${session}`, 'Content-Type': 'application/json'},
            body: JSON.stringify({jobs_ids: checkedJobs}),
        });
        return {
            title: 'Usuario actializado',
            msg: 'Los cambios se han realizado con exito',
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
