import  { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className='contador-container'>
      <button className='boton-contador' onClick={decrement}>-</button>
      <span>{count}</span>
      <button className='boton-contador' onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
