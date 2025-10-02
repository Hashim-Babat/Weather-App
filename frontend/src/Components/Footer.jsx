import React from "react";

function Footer({ lastCity }) {
  return (
    <div className="mt-4 text-xs text-gray-300 flex justify-between">
      <p>Last searched: {lastCity}</p>
      <p>Powered by OpenWeather</p>
    </div>
  );
}

export default Footer;
