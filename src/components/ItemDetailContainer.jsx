import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById} from "../asyncMock"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const id = useParams().id;    // return a string

  useEffect( () => {
    getItemById(Number(id))  // Convert sting to number to pass a number
        .then((res) => {
            setItem(res);
        })
  }, [id])


  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>

  )
}

export default ItemDetailContainer;
