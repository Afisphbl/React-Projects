import { createContext, useContext } from "react";

const weatherData = createContext();

function WeatherProvider({
  weather,
  forecast,
  handleWeatherUpdate,
  handleForecastUpdate,
  handleError,
  handleLoading,
  children,
}) {
  return (
    <weatherData.Provider
      value={{
        weather,
        forecast,
        handleWeatherUpdate,
        handleForecastUpdate,
        handleError,
        handleLoading,
      }}
    >
      {children}
    </weatherData.Provider>
  );
}

function useWeatherData() {
  return useContext(weatherData);
}

export { WeatherProvider, weatherData, useWeatherData };
