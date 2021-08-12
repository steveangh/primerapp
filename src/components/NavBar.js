import CartWidget from "./CartWidget";
import {Link,NavLink} from "react-router-dom"

const NavBar = () =>
    <header>
        <NavLink to="/" exact>
            <h1>Bikinis KG</h1>
        </NavLink>

        <nav>
            <Link to="/categoria/1">Inicio</Link>
            <Link to="/categoria/2">Producto</Link>
            <CartWidget/>
        </nav>
    </header>

export default NavBar