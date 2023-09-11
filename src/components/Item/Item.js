import { Button } from "@mui/material"

const Item = ({id, title, image, price, stock}) => {
  return (

    <article className="CardItem">
        <header className="Header">
           {title} 
        </header>
        <picture>
            <img src={image} alt = {title} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Precio: ${price}
            </p>
            <p className="Info">
                stock disponible: {stock}
            </p>
            
        </section>
        <footer className="ItemFooter">

            <Button>Ver detalle</Button>
            <hr/>
        </footer>
    </article>
  )
}

export default Item;
