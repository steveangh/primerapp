import NavBar from "./NavBar"

const Header = ({nombre, edad, usuarios, children}) => {

    nombre = "ABC"

    console.log(nombre)
    console.log(edad)
    console.log(usuarios)

    return (
        <header>
            <h1>Titulo</h1>
            <p>Bienvenido {nombre}</p>
            <NavBar />
        </header>
    )

}

export default Header