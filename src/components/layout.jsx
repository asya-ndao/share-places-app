import React from "react";
import { Link, Outlet } from "react-router-dom";
import { menuItems } from "../../constants/menu";
import { Logs } from "lucide-react";
import Authenticate from "./authenticate-button";
import Sidebarmenu from "./sidebarmenu";
import { useSidebar } from "../../contexts/sidebar-context";

const Layout = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <React.Fragment>
      <nav className="h-16 w-full bg-amber-500 p-4 flex justify-between items-center space-x-2">
        <div>
          <img
            src="assets/myplace.jpg"
            alt="my-place"
            className="w-10 rounded-full"
          />
        </div>
        <div className="hidden sm:flex gap-8">
          {/* Menu Items */}
          <ul className="flex gap-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="hover:border-b-2 border-sky-600 transition-all duration-200"
              >
                <Link
                  to={item.path}
                  className="flex gap-1.5 py-2 cursor-pointer tracking-tighter text-white font-bold px-2"
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Authenticate Button */}
          <Authenticate />
        </div>

        {/* Menu Button */}
        <Logs
          size={28}
          className="flex sm:hidden text-black"
          onClick={toggleSidebar}
        />
      </nav>

      <main className="relative">
        <Outlet />

        <Sidebarmenu />
      </main>
    </React.Fragment>
  );
};

export default Layout;
