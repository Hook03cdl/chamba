export default function Page() {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-4 h-screen">
		<div className="col-span-2 bg-white h-screen rounded-md shadow-md">chamba panel</div>
		<div className="col-start-3 bg-white h-screen rounded-md shadow-md">message panel</div>
	</div>
  );
}
