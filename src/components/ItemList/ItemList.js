import Item from "../Item/Item"

const ItemList = ({products}) => {

  //{products.map(product => <Item key={product.id} {...product}/>)}

  return (
    <div className='productos'>
        {products.map(prod => <Item key={prod.id} product = {prod}/>)}
    </div>
  )
}

export default ItemList