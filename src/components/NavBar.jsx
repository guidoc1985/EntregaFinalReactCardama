
import CarWidget from "./CarWidget"



const NavBar = () => {
    return (
        
    <header>
    <nav className="navbar navbar-expand-lg  bg-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="../index.html">
          <img className="logo" src="./src/assets/images/logo.jpg" alt="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white fuente-principal" aria-current="page" href="../paginas/productos.html">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white fuente-principal" aria-current="page" href="../paginas/about.html">About</a>
            </li> 
            <CarWidget />
          </ul>
        
            <input id="filtrarProducto" className="form-control me-2 fuente-principal" type="search" placeholder="Buscar" aria-label="Search"/>
            <button id="busqueda" className="btn btn-outline-info fuente-principal">Buscar</button>
             
        </div>
      </div>
    </nav>
  
</header> 



    )
}

export default NavBar