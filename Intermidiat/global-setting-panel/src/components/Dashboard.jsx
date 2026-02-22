import { useLanguage } from "../contexts/LanguageContext";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">
      <Hero />
      <Grid />
    </section>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <div className="dashboard__hero ">
      <h1 className="dashboard__welcome">{t("welcomeMessage")}</h1>
      <p className="dashboard__desc">{t("settingsDesc")}</p>
    </div>
  );
}

function Grid() {
  const { t } = useLanguage();
  return (
    <div className="dashboard__grid">
      <Card
        className="card--blue"
        icon="📊"
        title={t("cardOne")}
        desc={t("cardOneDesc")}
      />

      <Card
        className="card--purple"
        icon="👥"
        title={t("cardTwo")}
        desc={t("cardTwoDesc")}
      />

      <Card
        className="card--orange"
        icon="⚡"
        title={t("cardThree")}
        desc={t("cardThreeDesc")}
      />

      <Card
        className="card--green"
        icon="📄"
        title={t("cardFour")}
        desc={t("cardFourDesc")}
      />
    </div>
  );
}

function Card({ className, icon, title, desc }) {
  return (
    <div className={`dash-card ${className}`}>
      <span className="dash-card__icon">{icon}</span>
      <div className="dash-card__body">
        <h2 className="dash-card__title">{title}</h2>
        <p className="dash-card__desc">{desc}</p>
      </div>
    </div>
  );
}

export default Dashboard;
