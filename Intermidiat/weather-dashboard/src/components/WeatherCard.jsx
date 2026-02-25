import { useWeatherData } from "../context/WeatherContext";
import "../styles/WeatherCard.css";

function WeatherCard() {
  const { weather } = useWeatherData();
  return (
    <section className="weather-card">
      <WeatherHeader city={weather.city} description={weather.desc} />
      <WeatherMain />
    </section>
  );
}

function WeatherHeader({ city, description }) {
  return (
    <div className="weather-header">
      <h2>{city}</h2>
      <p className="weather-description">{description}</p>
    </div>
  );
}

function WeatherMain() {
  const { weather } = useWeatherData();
  return (
    <>
      <div className="weather-main">
        <div className="weather-temp">
          <h1>{weather.temp}°C</h1>
        </div>
        <div className="weather-icon-large">
          <img src={weather.icon} alt="Weather icon" />
        </div>
      </div>
      <WeatherDetails weather={weather} />
    </>
  );
}

function WeatherDetails({ weather }) {
  return (
    <div className="weather-details">
      <DetailItem label="Humidity" value={`${weather.humidity}%`} />
      <DetailItem label="Wind Speed" value={`${weather.wind_speed} m/s`} />
      <DetailItem label="Feels Like" value={`${weather.feel__like}°C`} />
    </div>
  );
}

function DetailItem({ label, value }) {
  return (
    <div className="detail-item">
      <span className="detail-label">{label}</span>
      <span className="detail-value">{value}</span>
    </div>
  );
}

export default WeatherCard;
