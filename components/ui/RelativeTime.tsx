'use client';

import '@github/relative-time-element';
import { useEffect } from 'react';

const RelativeTime = ({ dateTime }: { dateTime: string }) => {
	useEffect(() => {
		import('@github/relative-time-element');
	}, []);
	return <relative-time datetime={dateTime}></relative-time>;
};
export default RelativeTime;
