import '../styles/PizzaCard.css'

function PizzaCard({pizza: {name , photoName, ingredients, price}}) {
  return (
    <li className="pizza-card">
      <div className="img">
        <img src={photoName} alt={name} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p className="ingredients">{ingredients}</p>
        <p className="price">$ {price.toFixed(2)}</p>
      </div>
    </li>
  );
}

export default PizzaCard;
