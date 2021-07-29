// // const NavBar = () =>

// // <nav>
// //     <a href="#">Link</a>
// //     <a href="#">Link</a>
// // </nav>

// // export default NavBar 

// const NavBar = ({nombre,edad,usuarios, children}) => {

//     console.log(nombre)
//     console.log(edad)
//     console.log(usuarios)

//     return (

//         <header>    
//         <h1>Bikinis KG</h1>
//         <p>Bienvenido {nombre}!</p>
//         {children}
//         <nav>
//             <a href="#">Inicio</a>
//             <a href="#">Productos</a>
//         </nav>
//     </header>

//     )
// } 

// export default NavBar

const NavBar = () => 
    <header>
        <h1>Bikinis KG</h1>
        <nav>
            <a href="#">Incio</a>
            <a href="#">Productos</a>
        </nav>
    </header>
    
export default NavBar