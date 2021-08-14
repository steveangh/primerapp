
import {useState} from "react"
import {Provider} from "../contexto"

const CustomProvider = ({children}) => {

    const [nombre,setNombre] = useState("")
    

    const cambiarNombre = () => {
        setNombre("")
    }
    

    const valorDelContexto = {
        nombre : nombre,
        cambiarNombre : cambiarNombre
    }

    return(
        <Provider value={{nombre,cambiarNombre}}>
            {children}
        </Provider>
    )
}

export default CustomProvider