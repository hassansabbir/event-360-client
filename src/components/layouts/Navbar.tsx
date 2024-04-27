import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [position, setPosition] = useState("bottom");
  return (
    <div className="pb-5 ms-5 text-white">
      <div className="flex items-center justify-between">
        <span className="md:text-[32px] md:hidden font-semibold">
          Event{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradientFrom to-gradientTo">
            360
          </span>
        </span>
        <div className="md:hidden text-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                {" "}
                <RiMenu3Fill className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 rounded-3xl p-5 bg-slate-800 me-2">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <NavLink to="/">
                  <DropdownMenuRadioItem value="">Home</DropdownMenuRadioItem>
                </NavLink>
                <NavLink to="">
                  <DropdownMenuRadioItem value="">About</DropdownMenuRadioItem>
                </NavLink>
                <NavLink to="">
                  <DropdownMenuRadioItem value="">
                    Contact
                  </DropdownMenuRadioItem>
                </NavLink>
                <NavLink to="/admin">
                  <DropdownMenuRadioItem value="">
                    Dashboard
                  </DropdownMenuRadioItem>
                </NavLink>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <header className="h-16 hidden md:block fixed bg-[#02011B] w-full z-[999]">
        <nav className="text-white w-full h-full max-w-[1280px] px-[20px] mx-auto flex justify-between items-center">
          <span className="md:text-[32px] font-semibold">
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradientFrom to-gradientTo">
              360
            </span>
          </span>
          <ul className="space-x-4 md:text-lg font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/admin">Dashboard</NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
