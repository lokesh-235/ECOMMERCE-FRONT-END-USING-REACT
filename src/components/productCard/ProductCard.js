import './ProductCard.css';

function ProductCard({url,name,price}){
  return (
    <div className="card">
      <img src={url} alt="product"/>
      <h1>{name}</h1>
      <p>${price}</p>
      <button className="addToCart">add To Cart</button>
    </div>
  );
}

export default ProductCard;