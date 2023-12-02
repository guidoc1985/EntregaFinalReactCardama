/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';




const ItemDetail = ({ item }) => {
  return (
   
   
    <div className="row">
       <img src={item.image} className="img-fluid" alt={item.nombre}/>
       <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
       <p>$ {item.precio}</p>
       <p>Cantidad: {item.stock}</p>

    
    </div>
    
  );
};


export default ItemDetail;
