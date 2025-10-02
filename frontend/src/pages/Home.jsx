import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import WeatherCard from "../Components/WeatherCard.jsx";
import ForecastSection from "../Components/ForecastSection.jsx";
import Footer from "../Components/Footer.jsx";
import bgImage from "../assets/background.png";

function Home() {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "London");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "c8590e5e71c059c0ff4042d384764d15"; // replace with OpenWeather API key

  // Fetch weather
  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);

      // Save last searched
      localStorage.setItem("lastCity", cityName);
    } catch (err) {
      setError("City not found. Try again!");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch forecast
  const fetchForecast = async (cityName) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      // Extract one forecast per day (every 24h from 5-day list)
      const daily = res.data.list.filter((item) => item.dt_txt.includes("12:00:00"));
      setForecast(daily);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeather(city);
    fetchForecast(city);
  }, [city]);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-lg w-[350px] md:w-[500px] text-white">
        <Header />
        <SearchBar onSearch={(val) => setCity(val)} />
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {weather && <WeatherCard data={weather} />}
        {forecast.length > 0 && <ForecastSection data={forecast} />}
        <Footer lastCity={city} />
      </div>
    </div>
  );
}

export default Home;
