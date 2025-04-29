import React from "react";
import { Link } from "react-router";

const Authenticate = () => {

  const AUTH_BUTTON = [
    {
      path: "/authenticate",
      label: "Authenticate",
    }
  ]
  return (
    <div>
      {AUTH_BUTTON.map(item =>(
        <>
          <Link
         to={item.path}
         >
        </Link>
        <button className=" text-white font-bold bg-gradient-to-r from-blue-500 to-amber-600 rounded-md px-2 py-2 cursor-pointer transition duration-200">{item.label}</button>
        </>
      ))}
    </div>

    // <Link to="/authenticate">
    //   <button className=" text-white font-bold bg-gradient-to-r from-blue-500 to-amber-600 rounded-md px-2 py-2 cursor-pointer transition duration-200">
    //     Authenticate
    //   </button>
    // </Link>
  );
};

export default Authenticate;
