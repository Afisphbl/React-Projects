import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const hour = new Date().getHours();
  console.log(hour)
  const openingHour = 8;
  const closingHour = 20
  const isOpen = hour >= openingHour && hour <= closingHour

  const time = {
    openingHour,
    closingHour,
    isOpen,
  }
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "/assets/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "/assets/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "/assets/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "/assets/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "/assets/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "assets/prosciutto.jpg",
      soldOut: false,
    },
  ];

  return (
    <article className="container">
      <h1>Fast React Pizza Menu</h1>
       <Menu pizzas={pizzaData} />
      <Footer time={time}/>
    </article>
  );
}

export default App;
