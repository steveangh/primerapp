import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



export const CartWidget = () => {    

    // const  {cantidadTotal}  = useContext(contexto)

    const { carrito } = useContext(contexto)


    return (

    <Link to="/cart">
    <button className="material-icons">shopping_cart</button>
    <FontAwesomeIcon icon={faBell} style={{color:'black', margin: "auto"}}/>
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


export default CartWidget

