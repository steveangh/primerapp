import {useContext, useState} from 'react'
import {contexto} from "./CartContext"
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {

    const {carrito,addItem} = useContext(contexto)
    const [unidades, setUnidades] = useState()

    const onAdd = (cantidad) => {

        const item_para_agregar = {
            item : item,
            quantity : cantidad
        }
        addItem(item_para_agregar)
        setUnidades(cantidad)
    }

    if(unidades > 0) {
        return (
            <>
            <article className="detalle">
                <h4 className="detalleTitulo">{item.title}</h4>
                <div className="detalleImg">
                <img src={item.pictureUrl} alt="thumbnail" />

                </div>
                <div className="detalleCompra">
                    <p>{`Se agregaron ${unidades} ${item.title}` }</p>
                    <Link to="/Cart"><button className="finalizarCompra">Finalizar Compra</button></Link>
                </div>
            </article>
            </>
            )
    } else {
            <>
            <article className="detalle">
                <h4 className="detalleTitulo">{item.title}</h4>
                <div className="detalleImg">
                    <img src={item.pictureUrl} alt="thumbnail" />
                </div>
                <div className="detalleTexto">
                    <h3>${item.price}</h3>
                    <p>{item.description}</p>
                    <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd}/>
                </div>
            </article>
            </>
    }
}

export default ItemDetail;