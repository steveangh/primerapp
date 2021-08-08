import React from "react"


const Item = ({usuario}) => {
    return (
        <li>
            {usuario.nombre}
        </li>
        )
}

export default Item