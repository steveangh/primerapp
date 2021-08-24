import { Link } from "react-router-dom"

const Item = ({item}) => {

    return ( 
        <article className="item">
            <h3>{item.title} - ${item.price}</h3>
            <img src={item.pictureUrl} alt="thumbnail" />
            <p>{item.description}</p>
            <button>
                <Link to={`/item/${item.id}`}>Detalles</Link>
            </button>
        </article>
     );
}
 
export default Item;