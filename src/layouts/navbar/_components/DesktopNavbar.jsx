
import { Package2 } from "lucide-react";
import { NavItem } from "./NavItem";
import { SearchInput } from "./SearchInput";
import { UserMenu } from "./UserMenu";

export const DesktopNavbar = ({ navItems }) => (
  <nav className="hidden md:flex md:items-center md:justify-between w-full">
    <div className="flex items-center gap-6">
      <NavItem
        to="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span className="hidden lg:inline">Acme Inc</span>
      </NavItem>
      {navItems.map((item) => (
        <NavItem key={item.to} to={item.to}>
          {item.title}
        </NavItem>
      ))}
    </div>
    <div className="flex items-center gap-4">
      <SearchInput />
      <UserMenu />
    </div>
  </nav>
);
