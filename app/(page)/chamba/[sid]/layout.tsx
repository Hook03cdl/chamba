export default async function ServicePage({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section className="min-h-svh p-5">{children}</section>;
}
