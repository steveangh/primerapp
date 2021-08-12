import React from "react"
import Item from "./Item"


const ItemList = ({items}) => {
    
    return (
            <div id="item-list">
                {items.map(item => {
                   return (
                    <Item key={item.id} item={item}/>
                    )
                })}
            </div>
        );
}

export default ItemList

// const operacion = new Promise((resolver, rechazar) => {
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