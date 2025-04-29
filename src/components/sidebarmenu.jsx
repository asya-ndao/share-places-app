import React from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../constants/menu";
import Authenticate from "./authenticate-button";
import { useSidebar } from "../../contexts/sidebar-context";

const Sidebarmenu = () => {
  const { sidebarOpen } = useSidebar();

  return (
    <div
      className={`fixed w-full top-16 left-0 p-12 flex flex-col space-y-1.5 justify-center items-center lg:hidden bg-amber-400/40 backdrop-blur-lg ${
        sidebarOpen ? "block" : "hidden"
      }`}
    >
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="py-4 ">
            <Link to={item.path} className="flex items-center text-white gap-4">
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-center space-x-6 pt-6 border-t border-white">
        <Authenticate />
      </div>
    </div>
  );
};

export default Sidebarmenu;
