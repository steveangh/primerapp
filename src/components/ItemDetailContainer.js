import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
// import {prod} from "./productos";


const init = { id: 1, title: "Producto 01", description: "Lorem Ipsum", price: 100 , pictureUrl : "http://placehold.it/500x300" , stock : 10 }


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
        }, )

    }, [])

    return (
        <div>
            <p>Detalle del Producto</p>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;

