
import CarWidget from "./CarWidget"
import {Link} from "react-router-dom"
import logo from '../assets/images/logo.jpg';

const NavBar = () => {
    return (
        
    <header>
     
    <nav className="navbar navbar-expand-lg  bg-black">
      <div className="container-fluid">
      <img className="logo" src={logo} alt="logo" />
        <Link to ="/" className="LinkStyle">Home </Link>
       
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to = "/remeras" className="LinkStyle">Remeras</Link>
            </li>
            <li className="nav-item">
            <Link to = "/buzos"className="LinkStyle">Buzos</Link>
            </li> 
            <li className="nav-item">
            <Link to = "/camisas"className="LinkStyle">Camisas</Link>
            </li> 
            <CarWidget />
           
          </ul>
{/*         
            <input id="filtrarProducto" className="form-control me-2 fuente-principal" type="search" placeholder="Buscar" aria-label="Search"/>
            <button id="busqueda" className="btn btn-outline-info fuente-principal">Buscar</button> */}
             
        </div>
      </div>
    </nav>
  
</header> 



    )
}

export default NavBar