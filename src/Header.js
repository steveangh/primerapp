import NavBar from "./components/NavBar"

const Header = ({nombre, edad, usuarios, children}) => {

    return (
        <header>
            <h1>Titulo</h1>
            <p>Bienvenido {nombre}</p>
            {children}
            <NavBar />
        </header>
    )

}

export default Header