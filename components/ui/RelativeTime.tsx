'use client';

import '@github/relative-time-element';
import { useEffect } from 'react';

const RelativeTime = ({ dateTime }: { dateTime: Date }) => {
	useEffect(() => {
		import('@github/relative-time-element');
	}, []);
	return <relative-time datetime={dateTime.toString()}></relative-time>;
};
export default RelativeTime;
