import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const init = {id: 1, title: "Producto 1", description: "Lorem Ipsum", price: 100, pictureUrl : "http://placehold.it/500x300"}

const ItemDetailContainer = () => {

  const [item, setItem] = useState(false)

        useEffect(() => {

            setTimeout(() => {
              Promise
              .resolve(init)
              .then(response => {

              })
            }, 2000)
        }, [])

        return (
          <div>
            <p>Detalle Item</p>
            <ItemDetail item={item}/>
          </div>
          
          )
  }
    export default ItemDetailContainer
//     const operacion = new Promise((resolver, rechazar) => {
//     //Aquí va la operación que tarda en el tiempo.
//     setTimeout(() => {
//       // console.log('Hola!');
//       const pedido_a = ['Steve', 'Alex'];
//       resolver(pedido_a);
//     }, 2000);
//   });
  
//   // console.log(operacion);
  
//   operacion.then(() => {
//     console.log('Termino la solicitud de manera correcta');
//   });
  
//   operacion.catch(() => {
//     console.log('Termino la solicitud de manera incorrecta');
//   });
// }

