# 🌦 Weather Dashboard — React

A modern **Weather Dashboard** built with **React** that allows users to search for any city and view live weather conditions along with a **5-day forecast**, using the **OpenWeather API**.

This project focuses on **API data fetching**, **global state management using Context**, **loading & error handling**, and **dynamic UI rendering**.

---

## 🚀 Live Features

- 🔍 City Search
- 🌡 Live Weather Display
- 📆 5-Day Forecast
- ⏳ Skeleton Loading UI
- ❌ Error Handling
- ⚡ Fast & Responsive UI
- 🌍 Global State using Context API

---

## 🧠 What I Learned

- Fetching data from external APIs
- Using query parameters
- Handling loading, error & empty states
- Creating custom UI skeleton loaders
- Managing global state using React Context
- Clean component architecture
- Structuring scalable React applications

---

## 🔗 API Used

### OpenWeather API

**Current Weather**  
https://api.openweathermap.org/data/2.5/weather

**5-Day Forecast**  
https://api.openweathermap.org/data/2.5/forecast

---

## 🏗 Project Architecture

```text
src/
 ├─ components/
 │   ├─ SearchBar.jsx
 │   ├─ WeatherCard.jsx
 │   ├─ ForecastList.jsx
 │   ├─ SkeletonLoader.jsx
 │
 ├─ context/
 │   └─ WeatherContext.jsx
 │
 ├─ styles/
 │   ├─ App.css
 │   ├─ SearchBar.css
 │   ├─ WeatherCard.css
 │   ├─ ForecastList.css
 │   ├─ SkeletonLoader.css
 │
 ├─ App
```

## ⚙ Core Features Breakdown

### 🔍 City Search

- Controlled input

- Fetches live weather & forecast

- Press Enter or click Search

### 🌡 Weather Card

- City name

- Weather description

- Temperature

- Feels like

- Humidity

- Wind speed

- Weather icon

### 📆 Forecast Panel

- 5-day filtered forecast

- Daily weather icons

- Daily temperatures

### ⏳ Loading State

- Beautiful skeleton loader UI

- Improves perceived performance

### ❌ Error Handling

- Invalid city name

- Network failure

- API errors

### ⚡ Fast & Responsive UI

- Smooth transitions

- Mobile-optimized

- Clean design system

### 🌍 Global State

- WeatherContext for easy data sharing

- No prop drilling

- Clean state management

---

## 🛠 Tech Stack

- React 18

- Vite

- CSS Modules

- OpenWeather API

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 🎯 Key Concepts Learned

1. **API Integration** — Fetching real-time data from OpenWeather API

2. **State Management** — Using Context API for global state

3. **Conditional Rendering** — Handling loading, error & success states

4. **Component Architecture** — Breaking down UI into reusable components

5. **UI/UX** — Implementing skeleton loaders & smooth transitions

6. **Data Processing** — Filtering & formatting forecast data

---

## 🔮 Possible Improvements

- 🌎 Auto-location weather using Geolocation API

- 🌙 Dark mode toggle

- 📊 Weather charts

- 🕒 Search history

- 🔄 Unit toggle (°C / °F)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 👤 Author

Built by Abduselam Seid AKA **AFIS**
Frontend Developer — React • Context API • UI Engineering
