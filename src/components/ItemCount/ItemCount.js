import { Button, Stack } from '@mui/material';
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const[qty, setQty] = useState(initial);

    const increment = () => {
        if(qty < stock) {
            setQty(qty + 1)
        }
    }

    const decrement = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                
                <Button variant='outlined' color = 'secondary' onClick={decrement}>-</Button>
                <Button variant='outlined' color = 'secondary' onClick={increment}>+</Button>
                <h4> {qty} </h4>
                <Button variant='outlined' color = 'secondary' onClick={() => onAdd(qty)}>Agregar al carrito</Button>

            </div>
        </div>
    )
}

export default ItemCount