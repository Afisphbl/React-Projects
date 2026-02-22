import Button from "./components/Button";
import UserCard from "./components/UserCard";
import SkeletonLoader from "./components/SkeletonLoader";
import DataFetch from "./hooks/DataFetch";
import "./App.css";

function App() {
  const { data, loading, error, fetchData } = DataFetch();

  return (
    <article className="app-container">
      <Header />
      <main className="app-main">
        {loading && <SkeletonLoader />}
        {error && <div>Error: {error.message}</div>}
        {data && !loading && !error && <UserCard data={data} />}
      </main>

      <section className="button-container">
        <Button
          className="refresh-button"
          onClick={fetchData}
          disabled={loading}
        >
          {loading ? "Loading..." : "Refresh User"}
        </Button>
      </section>
    </article>
  );
}

function Header() {
  return (
    <header className="app-header">
      <h1>Random User Generator</h1>
      <p>Discover interesting profiles from around the world</p>
    </header>
  );
}

export default App;
