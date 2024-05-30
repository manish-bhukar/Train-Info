import React from "react";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
     
      <div className="flex justify-between">
        <Link
          to={"/trainform"}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Show Train Info
        </Link>
        <Link
          to={"/trainform"}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Show Train Route
        </Link>
        <Link
          to={"/getassistance"}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Get assistance
        </Link>
      </div>
    </div>
  );
};

export default Mainpage;
