import React from 'react';
import Each from '../Each';

export default function Gallery({ photos }: { photos: string[] }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-1 *:size-full *:aspect-square *:object-cover">
			<Each of={photos} render={(p) => <img src={p} alt="image" />} />
		</div>
	);
}