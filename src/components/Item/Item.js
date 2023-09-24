import { Link } from "react-router-dom";

//const Item = ({id, title, image, price, stock}) => {
const Item = ({product}) => {
  return (
    <div className="producto">
      <h4 className="producto-title">{product.title}</h4>
      <img src={`/img/${product.image}`} alt = {product.title} className="producto-img"/>
      <p> Precio: ${product.price} </p>
      <p> Stock disponible: {product.stock} </p>
      <Link className="ver-mas" to={`/item/${product.id}`}>Ver detalle</Link>
    </div>                                                
    
  )
}

export default Item;