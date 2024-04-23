import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="h-16 fixed w-full z-[999]">
        <nav className="text-white w-full h-full max-w-[1280px] px-[20px] mx-auto flex justify-between items-center">
          <span>
            Event{" "}
            <span className="text-gradientFrom from-gradientFrom to-gradientTo">
              360
            </span>
          </span>
          <ul className="space-x-4">
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
