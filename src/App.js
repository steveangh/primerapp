import {createContext, useState} from 'react';
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import "./estilos.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CustomProvider from "./components/CartContext"
import ItemCount from "./components/ItemCount"
import Cart from "./components/Cart"
export const contexto = createContext({nombre:"steve"})
const {Consumer, Provider} = contexto

const App = () => {

    //https://www.npmjs.com/package/validator
    //https://www.npmjs.com/package/react-hook-form

    const [nombre,setNombre] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [error,setError] = useState(false)

    const guardarNombre = (e) => {
        //console.log("Estan escribiendo en el input nombre")
        const input = e.target
        const valor = input.value
        setNombre(valor)
    }

    const guardarTelefono = (e) => {
        //console.log("Estan escribiendo en el input nombre")
        const input = e.target
        const valor = input.value
        setTelefono(valor)
    }

    const guardarEmail = (e) => {
        //console.log("Estan escribiendo en el input nombre")
        const input = e.target
        const valor = input.value
        setEmail(valor)
    }

    const realizarPedido = (e) => {
        e.preventDefault()
        //console.log("Guardando pedido")
        //const buyer = {nombre,telefono,email}
        if(validarCampos()){
            setError(false)
            console.log("Valido todo y guardo la orden")
        }else{
            setError(true)
        }
    }

    const validarCampos = () => {
        if(nombre.trim().length && telefono.trim().length && email.trim().length){
            return true
        }else {
            return false
        }
    }

    return (
        <Provider>
            <BrowserRouter>
                <NavBar />
                    <Switch>
                        <Route path="/" component={ItemListContainer} exact />
                        <Route path="/categoria/:id" component={ItemListContainer} />
                        <Route path="/item/:id" component={ItemDetailContainer} />
                        <Route path="/login"/>
                        <Route path="/logout"/>
                        <Route path="/cart" component={Cart}/>
                    </Switch> 

                    {error? <p>Por favor completar todos los campos</p> : null }

        <form onSubmit={realizarPedido}>

            <input type="text" placeholder="Nombre" onChange={guardarNombre}/>

            <input type="text" placeholder="Telefono" onChange={guardarTelefono}/>

            <input type="text" placeholder="Email" onChange={guardarEmail}/>

            <button /* onClick={realizarPedido} */>guardar</button>

        </form>

            </BrowserRouter>
        </Provider>

    )
}



export default App




