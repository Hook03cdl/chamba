import NavLink from "./NavLink";
import { Home } from "lucide-react";

export default async function AsideBar() {
  return (
    <aside className="sticky top-0 left-0 overflow-y-auto flex flex-col items-center gap-24 w-64 h-screen bg-niagara-500 p-5 py-10">
      <div className="h-full w-full flex flex-col gap-3">
        <NavLink href={"/dashboard"}>
          <div className="flex items-center gap-2">
            <Home size={24} />
            <span>Dashboard</span>
          </div>
        </NavLink>
        <NavLink href={"/dashboard/chambas"}>Chambas</NavLink>
        <NavLink href={"/dashboard/solicitudes"}>Solicitudes</NavLink>
        <NavLink href={"/dashboard/galeria"}>Galeria</NavLink>
        {/* <Dropdown text="Menu">
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
				</Dropdown> */}
      </div>
    </aside>
  );
}
