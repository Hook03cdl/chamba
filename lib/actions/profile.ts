'use server';

// import { redirect } from 'next/navigation';
import { Fetch } from '../Fetch';
import { ContentToastProps } from '../hooks/useToast';
import { getToken } from '../utils/tokens';

export async function editDataUser(
	_prevState: ContentToastProps,
	formData: FormData
): Promise<ContentToastProps> {
	const session = await getToken('session');

	// await new Promise((resolve) => {
	// 	setTimeout(resolve, 5000);
	// });
	try {
		await Fetch('/user/updateProfile', {
			headers: { Authorization: `Bearer ${session}` },
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
