'use client';

import { useEffect } from 'react';

export default function CatchAll() {
	useEffect(() => {
		document.body.classList.remove('overflow-hidden');
	}, []);
	return null;
}
