import React from "react";
import { Link } from "react-router";

const NewPlace = () => {
  return (
    <Link to="/place/new">
      <div className="text-2xl text-white text-center"> Hello this is my places</div>
    </Link>
  );
};

export default NewPlace;

