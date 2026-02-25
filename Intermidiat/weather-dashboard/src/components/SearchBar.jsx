import { useState, useEffect } from "react";
import { useWeatherData } from "../context/WeatherContext";
import "../styles/SearchBar.css";

const apiKey = "cc7ff971f27b133209b5a2fe3e9a4cd3";

const URL = `https://api.openweathermap.org/data/2.5/`;

function SearchBar() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const {
    handleWeatherUpdate,
    handleForecastUpdate,
    handleError,
    handleLoading,
  } = useWeatherData();

  async function fetchData(city) {
    handleLoading(true);
    try {
      const response = await fetch(
        `${URL}weather?q=${city}&units=metric&appid=${apiKey}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      const weatherData = {
        id: data.id,
        desc: data.weather[0].description,
        city: data.name,
        temp: Math.round(data.main.temp),
        feel__like: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
      };

      handleWeatherUpdate(weatherData);

      const forecastResponse = await fetch(
        `${URL}forecast?q=${city}&units=metric&appid=${apiKey}`,
      );

      if (!forecastResponse.ok) {
        throw new Error("Failed to fetch forecast data");
      }

      const forecastData = await forecastResponse.json();

      handleForecastUpdate(forecastData);
    } catch (error) {
      handleError(error.message);
    } finally {
      handleError(null);
      handleLoading(false);
      setQuery("");
    }
  }

  useEffect(() => {
    if (city) {
      fetchData(city);
    }
  }, [city]);

  function handleSubmit(e) {
    e.preventDefault();
    setCity(query);
  }
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="Enter city name..."
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
