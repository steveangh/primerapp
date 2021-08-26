import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext"
import {Badge} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'


export const CartWidget = () => {    

    // const  {cantidadTotal}  = useContext(contexto)

    const { carrito } = useContext(contexto)


    return (

    <Link to="/cart">
    <button className="material-icons">shopping_cart</button>
    {carrito.length ? carrito.length : null}
    </Link>
    // <div>
    //     <Link to="/Cart"></Link>
    //     <span className="carritoTotal">{cantidadTotal()}</span>
    // </div>
    /* <Link to="/Cart"></Link>
    {carrito.length > 0 ? <Badge class="badge badge-dark">{badge}</Badge> : null}
    <FontAwesomeIcon icon={faShoppingCart} style={{fontSize:'1em', color:'black', margin:"auto"}}/> */
    /* <FontAwesomeIcon icon={faBell} style={{color:'black', margin: "auto"}}/> */
    

    )

}

    // const  {carrito, badge}  = useContext(contexto)
    
    // return (
    //     <Link to="/cart">
    //         <button className="material-icons">shopping_cart</button>
    //         {carrito.length > 0 ? carrito.map : null}
    //     </Link>
    // )


export default CartWidget

