import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import productos from "../productos.json"
import ItemList from "./itemList"



// eslint-disable-next-line react/prop-types
const ItemListContainer = () => {

  const [ item, setItem] = useState([])
  const {id} = useParams();

useEffect(()=>{
  console.log("Categoría seleccionada:", id);
const fetchData = async()=>{
  try{
    const data = await new Promise ((resolve)=>{
      setTimeout(()=>{
        resolve( id ? productos.filter(item=> item.tipo ===id): productos)
      }, 100)
    })
    console.log( "productos filtrados:", data)
    setItem(data)
  }catch (error){
    console.log("Error:", error)
  }
}
  fetchData()
}, [id])




    return (

        <><div className="itemListContainer">
          <h3>Bienvenidos a Portland Skate!</h3>
        <p className=" itemListContainer "></p>

        <ItemList item = {item }/>
      </div></>
    )
}

    
  
  
  

export default ItemListContainer