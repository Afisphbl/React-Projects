import PizzaCard from "./PizzaCard";
import "../styles/PizzaList.css";

function PizzaList({ pizzas }) {
  return (
    <>
      <p className="menu-intro">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizza-list">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.name} pizza={pizza} />
        ))}
      </ul>
    </>
  );
}

export default PizzaList;
