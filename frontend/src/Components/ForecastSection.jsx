import React from "react";

function ForecastSection({ data }) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <h3 className="mb-2 font-semibold">5-Day Forecast</h3>
      <div className="flex space-x-3 overflow-x-auto">
        {data.map((day, index) => {
          const date = new Date(day.dt_txt);
          const dayName = days[date.getDay()];
          return (
            <div key={index} className="bg-white/20 rounded-lg p-3 text-center min-w-[70px]">
              <p>{dayName}</p>
              <img
                alt="icon"
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              />
              <p>{Math.round(day.main.temp_max)}° / {Math.round(day.main.temp_min)}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForecastSection;
