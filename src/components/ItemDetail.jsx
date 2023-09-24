import { Link } from "react-router-dom";
import '../main.css';
import ItemCount from "./ItemCount/ItemCount";

export const ItemDetail = ({item}) => {
  return (
    <div className="producto">
      <h4 className="producto-title">{item.title}</h4>
      <img src={`/img/${item.image}`} width={200} alt = {item.title} className="producto-img"/>
      <p> Precio: ${item.price} </p>
      <p> Stock disponible: {item.stock} </p>
      <p> Descriptio: {item.description}</p>
      <ItemCount />
    </div>    
  )
}

export default ItemDetail;