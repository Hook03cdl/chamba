'use server';

interface FetchOptions extends RequestInit {
	headers?: {
		[key: string]: string;
	};
}

export async function Fetch<T>(
	endpoint: string,
	options: FetchOptions = {}
): Promise<T> {
	const response = await fetch(`http://localhost:8000/api${endpoint}`, options);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response.json() as Promise<T>;
}
