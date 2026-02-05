import CardProduct from "./CardProduct";

import "../styles/CardList.css";

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <CardProduct key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
