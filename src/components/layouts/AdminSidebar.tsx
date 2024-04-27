import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="bg-blue-950 p-5 col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex gap-5 flex-col">
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 rounded-md shadow-md hover:bg-dark-gray transition-all hover:text-white flex items-center gap-2",
              {
                "bg-green-400 text-white": isActive,
              }
            )
          }
          to="/admin/dashboard"
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 rounded-md shadow-md hover:bg-dark-gray transition-all hover:text-white flex items-center gap-2",
              {
                "bg-green-400 text-white": isActive,
              }
            )
          }
          to="/admin/eventItems"
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Event Items</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 rounded-md shadow-md hover:bg-dark-gray transition-all hover:text-white flex items-center gap-2",
              {
                "bg-green-400 text-white": isActive,
              }
            )
          }
          to="/"
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Home</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
