import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/Header.css";

function Header() {
  const { t } = useLanguage();
  const { theme, handleThemeChange } = useTheme();
  const themeText = t(theme === "light" ? "dark" : "light");

  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo">⚙️</span>
        <h1 className="header__title">{t("appTitle")}</h1>
      </div>
      <div className="header__actions">
        <button className="header__theme-btn" onClick={handleThemeChange}>
          <span>🌙</span>
          <span>{themeText}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
