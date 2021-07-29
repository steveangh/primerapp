import Header from "./Header"
import NavBar from "./NavBar"
import CartWidget from "./componentes/CartWidget"



const App = () => {

       const usuarios = [{nombre: "Steve"}]
       const nombre = "Alex"
       const Producto = [{prod: "Camisa"}]

       return (
           <>
                <header nombre="Steve" edad={29} usuarios={usuarios}/>
                <NavBar Producto ={prod}/>
           </>
       )
}

export default App