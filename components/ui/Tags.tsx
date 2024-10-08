import React from 'react';
import Each from '../Each';

export default function Tags({ texts }: { texts: string | string[] }) {
	return (
		<div className="flex flex-wrap max-w-96 gap-3">
			{Array.isArray(texts) ? (
				<Each
					of={texts}
					render={(text) => (
						<div className="bg-niagara-100 text-gray-600 rounded-full p-1 px-2 text-xs">
							<p>{text}</p>
						</div>
					)}
				/>
			) : (
				<div className="bg-niagara-100 text-gray-600 rounded-full p-1 px-2 text-xs">
					<p>{texts}</p>
				</div>
			)}
		</div>
	);
}
