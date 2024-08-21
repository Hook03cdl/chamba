export default function page({ params }: { params: { sid: string } }) {
	return (
		<div>
			<p>{params.sid}</p>
		</div>
	);
}
