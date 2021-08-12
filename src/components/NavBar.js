import CartWidget from "./CartWidget";
import {Link,NavLink} from "react-router-dom"

const NavBar = ({ nombre}) => 
    <>
        <h1>Bikinis KG</h1>
        <CartWidget/>
        <nav>
            <a href="#">Incio</a>
            <a href="#">Productos</a>
            <p>{nombre}</p>

        </nav>
    </>
    
export default NavBar