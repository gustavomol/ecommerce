import { Button } from "@mui/material"


const Item = ({id, title, image, price, stock}) => {
  return (
    <div className="producto">
        <h4>{title}</h4>
        <img src={image} alt = {title} className="ItemImg"/>
        <p> Precio: ${price} </p>
        <p> Stock disponible: {stock} </p>
        <a className="verdetalle" href={`/item/${id}`}>Ver detalle</a>
    </div>
  )
}

export default Item;
