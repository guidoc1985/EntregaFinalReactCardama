/* eslint-disable react/prop-types */
import Item from "../Item/Item"

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
const ItemList = ({ item }) => {

  return(
    <div className="row  justify-content-center">
{item.map(item=>
<div className="col-md-5 my-3" key={item.id}>

  <Item item={item}/>
  
  
    </div>
  )};
  </div>
  )
};

export default ItemList;
