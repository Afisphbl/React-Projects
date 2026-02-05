import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";

import "./App.css";

function App() {
  const [monster, setMonster] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    async function fetchMonsters() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setMonster(data);
    }

    fetchMonsters();
  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredMonsters = monster.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  return (
    <article className="app">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Search Monsters" onChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </article>
  );
}

export default App;
