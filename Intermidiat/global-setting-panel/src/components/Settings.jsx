import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { useLayout } from "../contexts/LayoutContext";
import "../styles/SettingsPanel.css";

function SettingsPanel() {
  const { t, setLanguage, language } = useLanguage();
  const { theme, handleThemeLight, handleThemeDark } = useTheme();
  const { density, setDensity } = useLayout();

  let curLang = language === "en" ? t("english") : t("arabic");
  let curTheme = theme === "light" ? t("light") : t("dark");
  let curLayout = density === "comfortable" ? t("comfortable") : t("compact");

  return (
    <aside className="settings-panel">
      <h1 className="settings-panel__title">
        <span className="settings-panel__icon">🎛</span>
        Preferences
      </h1>

      <SettingsGroup label={t("theme")}>
        <Button active={theme === "light"} onClick={handleThemeLight}>
          {t("light")}
        </Button>
        <Button active={theme === "dark"} onClick={handleThemeDark}>
          {t("dark")}
        </Button>
      </SettingsGroup>
      <SettingsGroup label={t("language")}>
        <Button active={language === "en"} onClick={() => setLanguage("en")}>
          {t("english")}
        </Button>
        <Button active={language === "ar"} onClick={() => setLanguage("ar")}>
          {t("arabic")}
        </Button>
      </SettingsGroup>
      <SettingsGroup label={t("layout")}>
        <Button
          active={density === "comfortable"}
          onClick={() => setDensity("comfortable")}
        >
          {t("comfortable")}
        </Button>
        <Button
          active={density === "compact"}
          onClick={() => setDensity("compact")}
        >
          {t("compact")}
        </Button>
      </SettingsGroup>

      <div className="settings-panel__summary">
        <SummaryItem label={t("theme")} value={curTheme} />
        <SummaryItem label={t("language")} value={curLang} />
        <SummaryItem label={t("layout")} value={curLayout} />
      </div>
    </aside>
  );
}

function SettingsGroup({ label, children }) {
  // const { theme } = useTheme();
  return (
    <div className="settings__group">
      <label className="settings__label">{label}</label>
      <div className="settings__options">{children}</div>
    </div>
  );
}

function Button({ children, active, onClick }) {
  return (
    <button
      className={`settings__option-btn ${active ? "settings__option-btn--active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function SummaryItem({ label, value }) {
  const { language } = useLanguage();
  const curr = language === "en" ? "Current" : "الحالي";
  return (
    <div className="settings-panel__summary-item">
      <span className="settings-panel__summary-label">
        {curr} {label}
      </span>
      <span className="settings-panel__summary-value">
        <span className="settings-panel__badge">{value}</span>
      </span>
    </div>
  );
}

export default SettingsPanel;
