/* eslint-disable react/prop-types */
import { useCartContext } from "../Context/CartContext";



const ItemCart = ({product}) => {
    const { removeProduct} = useCartContext();
  return (
    <div className="itemCart">
      <div className="image-container">
        <img src={product.image} alt={product.title} className="product-image"/>
        </div>
        <div>
          
            <p>Titulo: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio unitario: $ {product.price}</p>
            <p>Subtotal: $ {product.quantity * product.price}</p>
            
            <button className="agregar-carrito" onClick={()=> removeProduct(product.id)}>Elminar</button>
            
        </div>
    </div>
  
  )
}

export default ItemCart