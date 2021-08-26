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

    const [nombre, setNombre] = useState("Steve")
    
    const cambiarNombre = () => {
        setNombre("Alex")
    }

    const valorDelContexto = {
        nombre : nombre,
        cambiarNombre : cambiarNombre
    }
    // const hacerClick = (e) => {
    //     console.log(e)
    //     console.log("Hola")
    // }

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



