import { Button } from "@mui/material"
import { Link } from "react-router-dom";


const Item = ({id, title, image, price, stock}) => {
  return (
    <div className="producto">
        <h4 className="producto-title">{title}</h4>
        <img src={`/img/${image}`} alt = {title} className="producto-img"/>
        <p> Precio: ${price} </p>
        <p> Stock disponible: {stock} </p>
        <Link className="ver-mas" to={`/item/${id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item;
