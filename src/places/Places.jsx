import React from "react";
import { useParams } from "react-router-dom";
import { placeItems } from "../constants/place";

const Places = () => {

    const userId =useParams().userId;
    const loadedPlaces = placeItems.filter(place => place.creator === userId);

  return (
    <div className="flex items-center flex-col gap-4 p-4 overflow-y-auto">
      {/* Place Items */}
      {loadedPlaces.map((item, index) => (
        <div
          key={index}
          className="max-w-sm md:max-w-lg rounded-md overflow-hidden shadow-lg bg-white mb-2"
        >
          <div>
            <div className="relative h-[200px]">
              <img
                src={item.imageUrl}
                alt="my-places"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            </div>
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{item.title}</h2>
              <h3 className="text-xl mb-2">{item.address}</h3>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>

            {/* Buttons */}
            <div className=" flex justify-center space-x-4 border-t px-4 py-2">
                <button className="border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white
                font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"
                >
                    View on map
                </button>
                <button
                 className="border focus:outline-none text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"
                >
                    Edit
                </button>
                <button className="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 
                font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"
                >
                    DELETE
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Places;
