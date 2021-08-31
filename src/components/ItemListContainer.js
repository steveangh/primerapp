  
import { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import { getFirestore } from "../firebase";


// const productosInit = [
//     { id: 1, title: "Producto 1", description: "Descripción de mi Producto", price: 100 , pictureUrl : "http://placehold.it/500x300" , categoria : "1" },
//     { id: 2, title: "Producto 2", description: "Descripción de mi Producto", price: 200 , pictureUrl : "http://placehold.it/500x300" , categoria : "2" }
// ]


const ItemListContainer = ({greeting}) => {


    const [cantidad, setCantidad] = useState(0)
    const [items, setItems] = useState([])
    const params = useParams()

    useEffect(() => {
      
    const db = getFirestore () 
    
    const itemCollection = db.collection("productos")
    const item = itemCollection.doc(itemId)

    itemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
            console.log('Item no existe :(');
        }
        setItems(querySnapshot.docs.map(doc => doc.data()));
    }).catch((error) => {
        console.log("Error buscando Items", error);
    }).finally(() => {
        setLoading(false);
    });

    const filtro = collection.where("categoryId", "==", "1")
   
    const query = filtro.get()
    const query = collection.doc("9aW0hBEMzKHtVfvGbgR5")

    // //Le saco las cosas a la promesa
    // query.then((resultado)=> {
    //     const resultado_parseado= []
    //     resultado.forEach((documento)=>{
    //         const id =documento.id
    //         const data = documento.data()
    //         const data_final = {id,...data}
    //         resultado_parseado.push(data_final)
    //         console.log(data_final)
    //         // setProducts(data_final)
    //     })
    //     setproductos(resultado_parseado)
    //     console.log(resultado_parseado)
    //     setLoading(false)
    // })
}, [])


    // setInterval (()=>{
    //     console.log("Haciendo un ping por socket")
    // },1000)

    // const getItem = () => {


    //     const promesa = new Promise((res,rej)=>{
    //         setTimeout(() => {

    //             if(params.id){
    //                 res(productosInit.filter(producto=>producto.id == params.id))
    //             }
    //             else{
    //                 res(productosInit)
    //             }
    //         }, 2000)
    //     })

    //     return promesa
    // }

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return(
        <div>
            {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
            <ItemList items={items} />
        </div>
     )
}

export default ItemListContainer


/* 


   








*/