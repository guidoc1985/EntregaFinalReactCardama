import CarritoProductCard from "../CarritoProductCard/CarritoProductCard"
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
 
  if (cart.length === 0) {
    return (
      <>
        <p className="fuente-principal">Tu Carrito está Vacío!</p>
        <Link to="/"  className="agregar-carrito">Ir al menu principal</Link>
      </>
    );
  }

  return (
    <>
    <CarritoProductCard>


      
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: $ {totalPrice()}</p>
   
      <Link to="/checkout">
        {' '}
        <button className="agregar-carrito ml-6px">Finalizar Compra</button>
      </Link>
      </CarritoProductCard>
    </>
  );
};

export default Cart;