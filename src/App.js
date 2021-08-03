import {useState} from "react"
import NavBar from "./components/NavBar"
import "./estilos.css"
import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {

       const usuarios = [{nombre: "Steve"}]
       //const contador = 0

       

    //    console.log(resultado)

    const [contador, setContador] = useState(0)

    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }

       return (
                <>
                    <NavBar/>
                    <ItemListContainer greeting="Hola a Todos"/>
                    <CartWidget/>
                    <header nombre="Steve" edad={29} usuarios={usuarios}>
                        <p>Hola Mundo!</p>
                    </header>
                    <p>Contador: {contador} </p>
                    <button onClick={restarContador} className="btn btn-danger">-</button>
                    <button onClick={sumarContador} className="btn btn-primary">+</button>
                    <br/>
                    <button className="btn btn-success">Añadir Carrito</button>

                    </>
                   )


    //    class App extends React.Component {

    //     constructor(props) {
    //         super(props)
    //         this.state = {
    //             nombre: "Steve"
    //         }
    //     }
    //    }

//    const [contador, setContador] = useState(0)

//    const sumadorContador = () => {
//        console.log("Hola Mundo")
//        setContador(contador + 1)
//    }
       
//     class App extends React.Component {

//        render (){
//            return (
//             <>
//             <header nombre="Steve" edad={29} usuarios={usuarios}>
//                 <p>Hola Mundo</p>
//             </header>
//        </>
//            )

//        }
// }

}
export default App