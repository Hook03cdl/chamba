import Avatar from "../ui/Avatar";
import { InputSearch } from "../ui/Inputs";
import Logo from "../ui/Logo";
import DropdownMenu from "./DropdownMenu";
import Notification from "./Notification";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-humo">
      <div className="flex justify-between items-center p-3 px-10 shadow-md z-40">
        <Logo size="small" variant="dark" />
        <InputSearch />
        <div className="flex gap-3 items-center">
          <Notification />
          <div className="relative">
            <DropdownMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
