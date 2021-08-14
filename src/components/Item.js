import {useContext} from 'react'; 
import { Link } from "react-router-dom"
import contexto from "../contexto"

const Item = ({item}) => {

    let resultado = useContext(contexto)
    
    console.log(resultado)

    return ( 
        <article className="item">
            <h3>{item.title} - ${item.price}</h3>
            <img src={item.pictureUrl} alt="thumbnail" />
            <p>{item.description}</p>
            {/* <button onClick={resultado.cambiarNombre}>
                cambiar nombre
            </button> */}
            <button>
                <Link to={`/item/${item.id}`}>Detalles</Link>
            </button>
        </article>
     );
}
 
export default Item;