  
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import { getFirestore } from "../firebase";

const ItemListContainer = ({greeting}) => {


    const [cantidad, setCantidad] = useState(0)
    const [items, setItems] = useState([])
    const {categoria} = useParams()

    useEffect (() => {
        setItems(true)
        const db = getFirestore();
        const itemCollection = db.collection("Productos");
        const filteredCollection = categoria ? itemCollection.where("categoryId", "==", categoria ) : itemCollection;
        filteredCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('no result');
            }
            const filteredItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCantidad(filteredItems);
        }, err => {
            console.log(err);
        }).finally(result => {
            setItems(false);
        });

    }, [categoria]);

    

    if(items) return <h3>Cargando...</h3>
    
    return (
        <>
        <div>
            <h2>{greeting}</h2>
            <ItemList  items={cantidad}/>
        </div>
        </>
    )
}

//     useEffect(() => {
      
//     const db = getFirestore () 
    
//     const itemCollection = db.collection("productos")
//     const item = itemCollection.doc(itemId)

//     itemCollection.get().then((querySnapshot) => {
//         if(querySnapshot.size === 0) {
//             console.log('Item no existe :(');
//         }
//         setItems(querySnapshot.docs.map(doc => doc.data()));
//     }).catch((error) => {
//         console.log("Error buscando Items", error);
//     }).finally(() => {
//         setLoading(false);
//     });

//     const filtro = collection.where("categoryId", "==", "1")
   
//     const query = filtro.get()
//     const query = collection.doc("9aW0hBEMzKHtVfvGbgR5")

// }, [])

//     const onAdd = (cantidad) => {
//         console.log(cantidad)
//     }

//     return(
//         <div>
//             {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
//             <ItemList items={items} />
//         </div>
//      )
// }

export default ItemListContainer




   







