import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { MdEventNote, MdMiscellaneousServices } from "react-icons/md";
import { LiaDrumSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <aside className="bg-blue-950 p-5 col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <p className="my-10 hidden md:block text-xl">
        Welcome to Admin Dashboard. Here you can manage all your website
        properties.
      </p>
      <nav className="flex gap-5 flex-col">
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-gray md:p-3 p-1 rounded-md shadow-md hover:bg-dark-gray transition-all hover:text-white flex items-center gap-2",
              {
                "bg-blue-800 shadow-2xl text-white": isActive,
              }
            )
          }
          to="/admin/manage-recentEvents"
        >
          <MdEventNote className="shrink-0 w-6 h-6" />
          <span className="truncate">Recent Events</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-gray md:p-3 p-1 rounded-md shadow-md hover:bg-dark-gray transition-all hover:text-white flex items-center gap-2",
              {
                "bg-blue-800 shadow-2xl text-white": isActive,
              }
            )
          }
          to="/admin/manage-eventItems"
        >
          <LiaDrumSolid className="shrink-0 w-6 h-6" />
          <span className="truncate">Event Items</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-gray md:p-3 p-1 rounded-md shadow-md hover:bg-dark-gray transition-all hover:text-white flex items-center gap-2",
              {
                "bg-blue-800 shadow-2xl text-white": isActive,
              }
            )
          }
          to="/admin/manage-services"
        >
          <MdMiscellaneousServices className="shrink-0 w-6 h-6" />
          <span className="truncate">Services</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-gray md:p-3 p-1 rounded-md shadow-md hover:bg-dark-gray transition-all hover:text-white flex items-center gap-2",
              {
                "bg-blue-800 shadow-2xl text-white": isActive,
              }
            )
          }
          to="/"
        >
          <FaHome className="shrink-0 w-6 h-6" />
          <span className="truncate">Home</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
