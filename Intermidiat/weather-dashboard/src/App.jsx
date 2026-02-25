import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import SkeletonLoader from "./components/SkeletonLoader";
import { WeatherProvider } from "./context/WeatherContext";
import "./styles/App.css";

function App() {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  if (forecast.list) {
    setForecast(
      forecast.list.filter((item) => item.dt_txt.includes("12:00:00")),
    );
  }

  function handleLoading(value) {
    setIsLoading(value);
  }

  function handleWeatherUpdate(newWeather) {
    setWeather(newWeather);
  }

  function handleForecastUpdate(newForecast) {
    setForecast(newForecast);
  }

  function handleError(error) {
    setError(error);
  }

  return (
    <article className="app-container">
      <Header />
      <WeatherProvider
        weather={weather}
        forecast={forecast}
        handleWeatherUpdate={handleWeatherUpdate}
        handleForecastUpdate={handleForecastUpdate}
        handleError={handleError}
        handleLoading={handleLoading}
      >
        <main className="app-main">
          <SearchBar />
          {error && <ErrorMessage message={error} />}
          {Object.keys(weather).length === 0 && !error && <EmptyState />}
          {isLoading && <SkeletonLoader />}
          {Object.keys(weather).length > 0 && !error && <WeatherCard />}
          {Object.keys(weather).length > 0 && !error && <ForecastList />}
        </main>
      </WeatherProvider>
    </article>
  );
}

function Header() {
  return (
    <header className="app-header">
      <h1>Weather Dashboard</h1>

      <p>Search for any city to get the current weather and 5-day forecast</p>
    </header>
  );
}

function ErrorMessage({ message }) {
  return (
    <div className="error-message ">
      <p>{message}</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="empty-state">
      <span className="empty-icon">🌍</span>
      <h2>Discover the Weather</h2>
      <p>Enter a city name above to get started</p>
    </div>
  );
}

export default App;
