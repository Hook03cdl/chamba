import NavLink from "./NavLink";
import { Home, Dumbbell, NotebookText, Images } from "lucide-react";

export default async function AsideBar() {
  const items = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <Home size={24} />,
    },
    {
      label: "Chambas",
      href: "/dashboard/chambas",
      icon: <Dumbbell size={24} />,
    },
    {
      label: "Solicitudes",
      href: "/dashboard/solicitudes",
      icon: <NotebookText size={24} />,
    },
    {
      label: "Galeria",
      href: "/dashboard/gallery",
      icon: <Images size={24} />,
    },
  ];
  return (
    <aside className="overflow-y-auto flex flex-col items-center gap-24 w-64 h-full bg-niagara-500 p-5 py-10">
      <div className="h-full w-full flex flex-col gap-3">
        {items.map((item, index) => (
          <NavLink href={item.href} key={index}>
            <div className="flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
            </div>
          </NavLink>
        ))}
        {/* <Dropdown text="Menu">
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
					<NavLink href={'/opcion'}>Opcion</NavLink>
				</Dropdown> */}
      </div>
    </aside>
  );
}
