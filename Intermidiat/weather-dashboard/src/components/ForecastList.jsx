import { useWeatherData } from "../context/WeatherContext";
import "../styles/ForecastList.css";

function ForecastList() {
  const { forecast } = useWeatherData();

  return (
    <section className="forecast-container">
      <h2 className="forecast-title">5-Day Forecast</h2>

      <ul className="forecast-list">
        {forecast.map((item) => {
          const date = new Date(item.dt * 1000);
          const day = date.toLocaleDateString("en-US", { weekday: "long" });
          const formattedDate = date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`;
          const temp = Math.round(item.main.temp);
          return (
            <ForecastItem
              key={item.dt}
              day={day}
              date={formattedDate}
              icon={icon}
              temp={temp}
            />
          );
        })}
      </ul>
    </section>
  );
}

function ForecastItem({ day, date, icon, temp }) {
  return (
    <li className="forecast-item">
      <div className="forecast-date">
        <strong>{day}</strong>
        <span>{date}</span>
      </div>

      <div className="forecast-icon">
        <img src={icon} alt="Weather icon" />
      </div>

      <div className="forecast-temp">{temp}°F</div>
    </li>
  );
}

export default ForecastList;
