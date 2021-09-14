import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
// import {prod} from "./productos";
import {getFirestore} from "../firebase"

// const init = { id: 1, title: "Producto 01", description: "Lorem Ipsum", price: 100 , pictureUrl : "http://placehold.it/500x300" , stock : 10 }


const ItemDetailContainer = () => {

    const [item, setItem] = useState(false)
    const { id } = useParams()
    const [loading, setLoading] =useState(true)
    

    useEffect(()=>{
        setTimeout(()=>{
        const db = getFirestore()
        const itemCollection = db.collection('productos')      
        itemCollection.get().then((query)=>{                        
            const data = query.docs.map(doc => ({...doc.data(), id: doc.id}))            
            setItem(data)
            setLoading(false)            
        })
    },1000)
    },[id])

    return (
        <div>
            <p>Detalle del Producto</p>
            <ItemDetail item={item}/>
        </div>
    );
}

export default ItemDetailContainer;

