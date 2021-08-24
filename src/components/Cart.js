import { useContext } from "react";
import {contexto} from "./CartContext"

const Cart = () => {

    const {carrito, removeItem, clear, carritoTotal} = useContext(context)

    if(carrito.lenght >0) {

    return (
        <div>
            <h1>Carrito</h1>

            {carrito.map(item =>
            <div className="articulos" key={item.item.id}>
                 <p>Producto: {item.item.title}</p>
                 <p>Cantidad: {item.quantity}</p>
                 <p>Total: ${item.item.price * item.quantity}</p>   
                {/* {item.item.title} x {item.quantity} - ${item.item.price * item.quantity} */}

                <button onClick={()=>removeItem(item.item.id)}>Borrar</button>
            </div>
            )}

            <div className="verificar">
                <p>Total: ${carritoTotal()}</p>
                <button className="verificarCompra" onClick={carritoTotal()}>Comprar</button>
                <button className="borrarCompra" onClick={clear}>Borrar Compra</button>
            </div>

        </div>
    )}else {
        return (
            <div className="vacio">
            <p>No hay productos en el carrito</p>
            <Link className="">Regresar a la Tienda</Link>
            </div>
        )
    }
}
   

