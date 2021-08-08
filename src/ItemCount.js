// import React from 'react';

import "./estilos.";

const App = () => {

    // const usuarios = [{nombre: "Steve"}]
    // const nombre = "Alex"
    //const contador = 0

    const [contador, setContador] = useState(0)

 //    console.log(resultado)

 const sumarContador = () => {
     setContador(contador + 1)
 }

 const restarContador = () => {
     setContador(contador - 1)
 }

    return (
             <>
                 <p>Contador: {contador} </p>
                 <button onClick={sumarContador}>+</button>
                 <button onClick={restarContador}>-</button>
                 <button>Agregar al Carrito</button>
            </>
                )
    }

export default ItemCount