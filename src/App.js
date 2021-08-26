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

    // const [nombre, setNombre] = useState("Steve")
    
    // const cambiarNombre = () => {
    //     setNombre("Alex")
    // }

    // const valorDelContexto = {
    //     nombre : nombre,
    //     cambiarNombre : cambiarNombre
    // }
    // const hacerClick = (e) => {
    //     console.log(e)
    //     console.log("Hola")
    // }

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
        <Provider value={valorDelContexto}>
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
        

        // //<CustomProvider>

            
        // //</CustomProvider>

    )
}



export default App

    // const usuarios = [{nombre: "Steve"}]
    //    //const contador = 0

    // //    console.log(resultado)

    // const [u,setUsuarios] = useState([])

    // useEffect(() => {
    //     const promesa = new Promise((resolve,reject)=>{
    //         setTimeout((usuarios)=>{                
    //         },2000)
    //     })
    //     promesa.then((usuarios)=>setUsuarios(u)  
    //     )

        

    // })
    

    // const [contador, setContador] = useState(0)

    // const sumarContador = () => {
    //     setContador(contador + 1)
    // }

    // const restarContador = () => {
    //     setContador(contador - 1)
    // }

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products/1')
    //         .then(response=> {
    //             return response.json();
    //         })
    //         .then(response => {
    //             console.log(response);
    //         })
    // }


    //    return (
    //             <>
    //                 <NavBar/>
    //                 <ItemListContainer greeting="Hola a Todos"/>
    //                 <CartWidget/>
    //                 <header nombre="Steve" edad={29} usuarios={usuarios}>
    //                     <p>Hola Mundo!</p>
    //                 </header>
    //                 <p>Contador: {contador} </p>
    //                 <button onClick={restarContador} className="btn btn-danger">-</button>
    //                 <button onClick={sumarContador} className="btn btn-primary">+</button>
    //                 <br/>
    //                 <button className="btn btn-success">Añadir Carrito</button>
    //                 <div>
    //                     Item List Container
    //                     <ItemList usuarios={usuarios}/>
    //                 </div>
    //                 <div className="App">
    //                     Fetch
    //                 </div>
    //                 </>
    //                )

                   


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



