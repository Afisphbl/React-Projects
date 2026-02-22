import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LayoutProvider } from "./contexts/LayoutContext";
import Header from "./components/Header";
import SettingsPanel from "./components/Settings";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <LayoutProvider>
          <Header />
          <div className="app__body">
            <SettingsPanel />
            <Dashboard />
          </div>
        </LayoutProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
