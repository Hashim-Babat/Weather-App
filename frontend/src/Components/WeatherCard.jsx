import React from "react";

function WeatherCard({ data }) {
  if (!data) return null;

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  return (
    <div className="flex items-center justify-between mb-6 p-4 rounded-xl ">
      
      <div className="flex-shrink-0">
        <img src={iconUrl} alt={data.weather[0].description} className="w-44 h-44" />
      </div>
      
      <div className="text-left flex-1 ml-14">
        <h2 className="text-xl font-semibold">{data.name}</h2>
        <p className="text-5xl font-bold">{Math.round(data.main.temp)}°C</p>
        <p className="capitalize text-lg">{data.weather[0].description}</p>
        <p className="text-md">Humidity: {data.main.humidity}%</p>
      </div>
    </div>
  );
}

export default WeatherCard;
