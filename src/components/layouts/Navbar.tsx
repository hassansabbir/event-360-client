import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="pb-5">
      <header className="h-16 fixed bg-[#02011B] w-full z-[999]">
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
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
