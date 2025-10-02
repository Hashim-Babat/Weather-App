import React from "react";
import { FaCloudSun } from "react-icons/fa";

function Header() {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <FaCloudSun size={28} className="text-orange-400 text-3xl" />
      <h1 className="text-3xl font-bold ml-18">Aurora Weather</h1>
    </div>
  );
}

export default Header;
