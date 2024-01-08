import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore"
import ItemList from "../ItemList/ItemList"



// eslint-disable-next-line react/prop-types
const ItemListContainer = () => {

  const [ item, setItem] = useState([])
  const {id} = useParams();

useEffect(()=>{
 const queryDb= getFirestore ();
 const queryCollection = collection(queryDb, "products")

 if (id){
  const queryFilter = query(queryCollection, where ("categoryId", "==", id));
  getDocs(queryFilter).then((res)=>
  setItem(res.docs.map((p)=> ({id: p.id, ...p.data()}))))
 }else{
  getDocs(queryCollection).then((res)=>
  setItem(res.docs.map((p)=> ({id: p.id, ...p.data()}))))
 }

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