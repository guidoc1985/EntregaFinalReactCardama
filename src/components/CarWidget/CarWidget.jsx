import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext";


const CarWidget = () => {
    const { totalProducts, cart} = useCartContext();
    return(
    <>
  <button className="boton-cart">
     <FaShoppingCart className="App-logo ml-2  mt-2"/>
            <span className="contador ml-5 mt-1 text-white">{totalProducts() || cart}</span>
            </button>
        </>
    )
}

export default CarWidget