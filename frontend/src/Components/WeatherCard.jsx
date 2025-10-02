import React from "react";

function WeatherCard({ data }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-lg font-semibold">{data.name}</h2>
      <p className="text-5xl font-bold">{Math.round(data.main.temp)}°C</p>
      <p className="capitalize">{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
}

export default WeatherCard;
