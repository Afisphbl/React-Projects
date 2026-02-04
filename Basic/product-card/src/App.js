import Header from "./components/Header";
import CardList from "./components/CardList";
import "./App.css";

function App() {
  const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    image: 'headphones.jpg',
    inStock: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "keyboard.jpg",
    inStock: false,
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    image: "watch.jpg",
    inStock: true,
  },
];
  return (
    <article className="container">
      <Header />
      <CardList products={products} />
    </article>
  );
}

export default App;
