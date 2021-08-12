import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {

    const onAdd = (cantidad) => {
        console.log("State Uplifting")
        console.log("Recibi la cantidad de un componente hijo")
        console.log(cantidad)
    }

    return (
        <article className="item">
            <h3>{item.title} - ${item.price}</h3>
            <img src={item.pictureUrl} alt="thumbnail" />
            <p>{item.description}</p>
            <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 0} onAdd={onAdd}/>
        </article>
    );
}

export default ItemDetail;