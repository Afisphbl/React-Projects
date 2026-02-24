import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./styles/App.css";

function App() {
  return (
    <article className="app-container">
      <Header />

      <main className="app-main">
        <SearchBar />
        <WeatherCard />

        {/* <EmptyState /> */}
      </main>
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
