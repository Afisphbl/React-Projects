import "../styles/CardProduct.css"

function CardProduct({product : {name, price, image , inStock}}) {
  return (
    <section className={`card ${!inStock ? "outofstock" : ""}`}>
      <div className={`stock ${inStock ? "in-stock" : "out-of-stock"}`}>
        {inStock ? "In Stock" : "Out of Stock"}
      </div>
      <div className="img">
        <img src={image} alt={name}/>
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </section>
  );
}

export default CardProduct
