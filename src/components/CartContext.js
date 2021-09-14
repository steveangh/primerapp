import {createContext,useState} from 'react'
// import contexto from '../contexto'

export const contexto = createContext()

const {Consumer,Provider} = contexto

const CartContext = ({children}) => {

    const [carrito,setCarrito] = useState([])
    console.log(1)

    const cantidadTotal = () => {
        if (carrito.length === 0) {
            console.log(0)
        } else {
            return carrito.length
        }
    }

    const addItem = (item) => {
    setCarrito([carrito,item])
    console.log(item)
    }

    const removeItem = (itemId) => {
    const BorrarItem = carrito.filter((item) => item.item.id !== itemId)
    setCarrito([...BorrarItem])    
    console.log(itemId)
    }

    const clear = () => {
    setCarrito([])
        console.log("Clear")
    }
    
    const empty = () => {
        setCarrito([])
    }
   
    const isInCart = (itemId) => {
        return carrito.filter(item => item.item.id === itemId).length === 1
    }

    return (
        <Provider value= {{addItem, carrito, cantidadTotal, clear, empty, removeItem, isInCart}} >
            {children}
        </Provider>
    )
}

export default CartContext