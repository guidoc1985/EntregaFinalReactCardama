/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import  { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import productos from '../productos.json'
import ItemDetail from "./ItemDetail"

// eslint-disable-next-line react/prop-types
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise ((resolve) => {
        
            resolve(productos.find(item=>item.id === parseInt(id)));
          }
        );
        promesa.then((data)=>{
        setItem(data);
        console.log(data)
      })
      
  }, [id]);

  return (
    <>
      <div className="itemListContainer">
        <div className='row'>
          <ItemDetail item={item} />
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
