import PizzaList from "./PizzaList";
import "../styles/Menu.css";

function Menu({ pizzas }) {
  return (
    <section className="menu">
      <h2>Our menu</h2>
      {pizzas.length > 0 ? (
        <PizzaList pizzas={pizzas} />
      ) : (
        <p>We're still working on our menu. Please come back later!</p>
      )}
    </section>
  );
}

export default Menu;
