import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const init = { id: 1, title: "Producto 1", description: "Lorem Ipsum", price: 100 , pictureUrl : "http://placehold.it/500x300" , stock : 10 }


const ItemDetailContainer = () => {

    const [item, setItem] = useState(false)
    const params = useParams()
    

    useEffect(() => {

        setTimeout(() => {
            Promise
                .resolve(init)
                .then(response => {
                    setItem(response)
                })
        }, 2000)

    }, [])

    return (
        <div>
            <p>Detalle Item</p>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;

