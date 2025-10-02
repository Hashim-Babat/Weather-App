import React from "react";
import { FaCloudSun } from "react-icons/fa";

function Header() {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <FaCloudSun size={28} className="text-yellow-400" />
      <h1 className="text-xl font-bold">Aurora Weather</h1>
    </div>
  );
}

export default Header;
