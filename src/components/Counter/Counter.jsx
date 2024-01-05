/* eslint-disable react/prop-types */
import  { useState } from 'react';

const Counter = ({ itemDetail, onAdd }) => {
  const [count, setCount] = useState(1); 

  const increase = () => {
    if (count < itemDetail.stock) {
      setCount(count + 1);
    } else {
      console.log('No hay más stock disponible');
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="contador-container">
      <button className="boton-contador" disabled={count <= 1} onClick={decrease}>
        -
      </button>
      <span>{count}</span>
      <button className="boton-contador" disabled={count >= itemDetail.stock} onClick={increase}>
        +
      </button>
      <button className='agregar-carrito' onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
