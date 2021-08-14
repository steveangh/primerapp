import {useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const ItemCount = ({ stock , initial , onAdd }) => {

    const [contador,setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const confirmar = () => {
        if(stock > 0){
            onAdd(contador)
        }
    }

    return (
        <>
            <p>Contador Actual : {contador}</p>
            <button type="button" class="btn btn-primary btn-sm" onClick={aumentarContador}>+</button>
            <button type="button" class="btn btn-danger btn-sm" onClick={restarContador}>-</button>
            <button type="button" class="btn btn-success" onClick={confirmar}>confirmar</button>
        </>
    )

}

export default ItemCount