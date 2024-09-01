import React from 'react';
import Each from '../Each';

export default function Tags({ texts }: { texts: string[] }) {
	return (
		<div className="flex gap-3">
			<Each
				of={texts}
				render={(text) => (
					<div className="bg-niagara-100 text-gray-600 rounded-full p-1 px-2 text-xs">
						<p>{text}</p>
					</div>
				)}
			/>
		</div>
	);
}
