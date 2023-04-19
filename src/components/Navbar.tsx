import OrganizationDropdown from "./OrganizationDropdown";
import ThemeToggle from "./ThemeToggle";
import ProfileDropdown from "./ProfileDropdown";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface NavbarProps {}

const Navbar = ({}) => {
  return (
    <header className="shadow-sm w-full pt-5">
      <div className="container flex flex-col">
        <div className="flex justify-between items-center gap-3 h-10 mb-3 pb-5 border-b border-b-slate-200">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span>Multitenant</span>
            </div>
            <span>/</span>
            <OrganizationDropdown />
          </div>
          <div className="flex gap-3 items-center justify-between">
            <ThemeToggle />
            <ProfileDropdown />
          </div>
        </div>
        <nav>
          <ul className="flex gap-3 items-center pb-3">
            <li>
              <Link href="/dashboard">
                <Button variant="link">Dashboard</Button>
              </Link>
            </li>
            <li>
              <Link href="/workspaces">
                <Button variant="link">Workspaces</Button>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <Button variant="link">Settings</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
