import Avatar from "../ui/Avatar";
import { InputSearch } from "../ui/Inputs";
import Logo from "../ui/Logo";
// import DropdownMenu from './DropdownMenu';
import Notification from "./Notification";
import { Button } from "../ui/button";
import Link from "next/link";
import { fetchDataUser } from "@/lib/data/user";
import { UserProps } from "@/lib/interfaces/interface";
import NavChambas from "@/components/header/NavChambas";
import { fetchDataJobs } from "@/lib/data/jobs";

export default async function Navbar() {
  const response = fetchDataUser();
  const data = await response;
  const jobs = await fetchDataJobs();
  return (
    <header className="sticky z-40 top-0 bg-humo">
      <div className="flex justify-between items-center p-3 px-10 shadow-md">
        <Logo size="small" variant="dark" />
        <InputSearch />
        <div className="flex gap-4 items-center">
          {data?.role === "0" ? (
            <Button>
              <Link className="font-semibold" href={"/suscribirse"}>
                Chamba Pro
              </Link>
            </Button>
          ) : (
            <></>
          )}
          <NavChambas jobs={jobs} />
          <Notification />
          <Avatar />
        </div>
      </div>
    </header>
  );
}
