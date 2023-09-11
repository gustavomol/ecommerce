

const ItemList = ({products}) => {

  return (
    <div className='ListGroup'>
        {products.map((product) => {
          return(
            <div>
              <img src={product.image} alt = {product.title}/>
              <h2>{product.id + ' ' + product.title}</h2>
              <p>${product.price}</p>
              <p>{product.description}</p>
              <hr/>
            </div>
          )        
        })}
    </div>
  )
}

export default ItemList