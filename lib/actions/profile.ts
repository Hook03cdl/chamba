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

export async function updateUserJobs(
    _prevState: ContentToastProps,
    formData: FormData
): Promise<ContentToastProps> {
    const selectJobs = formData.getAll('jobs_ids');
    const session = await getToken('session');

    if (selectJobs.length === 0) {
        return {
            title: 'Campos vacios',
            msg: 'Necesitas seleccionar al menos un trabajo, de lo contario no podras guardar los cambios',
            type: 'warning',
        };
    }
    if (!session) {
        return {
            title: 'Sin cuenta',
            msg: 'Si no tienes con una cuentas no podras realizar ninguna accion',
            type: 'error',
        };
    }

    try {
        const res = await fetch('http://127.0.0.1:8000/api/user/updateJobs', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${session}`,
            },
            method: 'POST',
            body: JSON.stringify({jobs_ids: selectJobs}),
        });
        if (!res.ok) {
            return {
                title: 'Error!',
                msg: 'A ocurrido un problema al momento de intentar efectuar los cambios',
                type: 'error',
            };
        }
        return {
            title: 'Usuario actualizado',
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

export async function updatePassword(
    _prevState: ContentToastProps,
    formData: FormData
): Promise<ContentToastProps> {
    const session = await getToken('session');
    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation'),
    };

    if (!data.email || !data.password || !data.password_confirmation) {
        return {
            title: 'Campos vacios',
            msg: 'Necesitas llenar todos lo campos, de lo contario no podras guardar los cambios',
            type: 'warning',
        };
    }

    try {
        const response = await fetch(
            'http://localhost:8000/api/user/updatePassword',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${session}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
        }
        const result = await response.json();
        if (result.error) {
            return {
                title: 'Error!',
                msg: result.error,
                type: 'error',
            };
        }
        return {
            title: 'Contrasena actualizada',
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

export async function followersUser($userId: string) {
    const session = await getToken('session');

    try {
        const response = await fetch(`http://localhost:8000/api/user/followers/${$userId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${session}`,
                'Accept': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function unfollowUser($userId: string) {
    const session = await getToken('session');

    try {
        const response = await fetch(`http://localhost:8000/api/unfollow/${$userId}`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                Authorization: `Bearer ${session}`,
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function sendEmailVerification(
    _prevState: ContentToastProps,
): Promise<ContentToastProps> {
    const session = await getToken('session');

    try {
        const response = await fetch('http://localhost:8000/api/email/verify-notification', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${session}`,
                'Accept': 'application/json',
            },
        });
        return {
            title: 'Correo enviado',
            msg: 'Se ha enviado un correo de verificacion a tu cuenta',
            type: 'success',
        }
    } catch (error) {
        console.error(error);
        return {
            title: 'Error!',
            msg: 'A ocurrido un problema al momento de intentar efectuar los cambios',
            type: 'error',
        }
    }
}
