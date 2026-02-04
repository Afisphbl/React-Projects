import CardProduct from "./CardProduct";
import "../styles/CardList.css"

function CardList({products}) {
  return (
    <div className="card-list">
        {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
    </div>
  );
}

export default CardList;
