import { fetchDataUser } from "@/lib/data/user";
import { UserCircle } from "lucide-react";
import Link from "next/link";
import { ToolTip } from "./Tooltip";

/* eslint-disable @next/next/no-img-element */
export default async function Avatar() {
  const user = await fetchDataUser();
  const link = user?.src
    ? user.src
    : `https://ui-avatars.com/api/?rounded=true&name=${encodeURIComponent(
        user?.name
      )}`;
  return (
    <ToolTip
      delay={0.3}
      position={"bottom"}
      content={
        <div>
          <h3>Contenido</h3>
        </div>
      }
    >
      <Link
        href={"/perfil"}
        className="flex items-center gap-3 hover:bg-gray-200 rounded-lg transition-colors duration-300 p-1 px-2"
      >
        {user?.src ? (
          <img
            src={"/images/notFound.png"}
            alt="user"
            className="size-12 rounded-full"
          />
        ) : (
          <img src={link} alt="" width={32} />
        )}
      </Link>
    </ToolTip>
  );
}
