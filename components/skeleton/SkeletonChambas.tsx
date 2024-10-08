export default function SkeletonChambas() {
	const Options = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
		return (
			<div className="flex items-center w-full gap-5 animate-pulse " key={e}>
				<div className="size-5 bg-gray-200 rounded-sm" />
				<div className="space-y-2 w-full">
					<div className="h-5 w-32 bg-gray-200 rounded-md" />
					<div className="h-5 w-full bg-gray-200 rounded-md" />
				</div>
			</div>
		);
	});
	return <>{Options}</>;
}
