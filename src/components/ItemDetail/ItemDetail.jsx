/* eslint-disable react/prop-types */
import  { useState } from 'react';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const ItemDetail = ({ item }) => {
  console.log(item)
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 mt-5">
        <img src={item.image} className="img-fluid" alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>$ {item.price}</p>
        <p>Cantidad: {item.stock}</p>

        <div>
          {goToCart ? (
            <Link to="/cart" className='boton-terminar'>Ver carrito</Link>
          ) : (
            <Counter itemDetail={item} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
