/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Contador from "./Contador"




const ItemDetail = ({ item }) => {
  
  
  return (
   
    
    <div className="row">
      <div className="col-md-6 offset-md-3 mt-5">
       <img src={item.image} className="img-fluid" alt={item.nombre}/>
       <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
       <p>$ {item.precio}</p>
       <p>Cantidad: {item.stock}</p>
<Contador></Contador>
    
    </div>
    </div>
    
  );
};


export default ItemDetail;
