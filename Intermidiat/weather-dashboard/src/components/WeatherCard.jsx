import "../styles/WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <WeatherHeader />
      <WeatherMain />
    </section>
  );
}

function WeatherHeader() {
  return (
    <div className="weather-header">
      <h2>London</h2>
      <p className="weather-description">Overcast Clouds</p>
    </div>
  );
}

function WeatherMain() {
  return (
    <>
      <div className="weather-main">
        <div className="weather-temp">
          <h1>14°C</h1>
        </div>
        <div className="weather-icon-large">
          <img src="cloud.png" alt="img" />
        </div>
      </div>
      <WeatherDetails />
    </>
  );
}

function WeatherDetails() {
  return (
    <div className="weather-details">
      <DetailItem label="Humidity" value="65%" />
      <DetailItem label="Wind Speed" value="3.2 m/s" />
      <DetailItem label="Feels Like" value="12°C" />
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
