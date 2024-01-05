
import CarWidget from "../Carwidget/CarWidget"
import {Link} from "react-router-dom"
import logo from '/assets/images/logo.jpg';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        
    <header>
     
    <nav className="navbar navbar-expand-lg  bg-black">
      <div className="container-fluid">
      <Link to ="/" className="LinkStyle nav-item">
      <img className="logo" href="/" src={logo} alt="logo" />
      </Link>
        <Link to ="/" className="LinkStyle home">Home </Link>
       
        
        <div className="navbar container-fluid" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to = "/category/remeras" className="LinkStyle">Remeras</Link>
            </li>
            <li className="nav-item">
            <Link to = "/category/buzos"className="LinkStyle">Buzos</Link>
            </li> 
            <li className="nav-item">
            <Link to = "/category/camisas"className="LinkStyle">Camisas</Link>
            </li> 
            <NavLink to="/cart" className="navbar-cart">
            <CarWidget />
            </NavLink>
           
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