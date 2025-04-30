// import { useViewMap } from "@/contexts/viewMap-context";
import React, { useState } from "react";
import ViewMap from "./modal-viewMap";

const Modal = () => {
  // const { toggleViewMap } = useViewMap;
  const [viewMapOpen, setViewMapOpen] = useState(false);

  return (
    <>
      <div className=" flex justify-center space-x-4 border-t px-4 py-2">
        <>
          <button
            className="border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white
          font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"
            onClick={() => setViewMapOpen(true)}
          >
            View on map
          </button>
        </>

        <button className="border focus:outline-none text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer">
          Edit
        </button>
        <button
          className="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"
        >
          DELETE
        </button>
      </div>

      <ViewMap isOpen={viewMapOpen} onOpen={setViewMapOpen} />
    </>
  );
};

export default Modal;
