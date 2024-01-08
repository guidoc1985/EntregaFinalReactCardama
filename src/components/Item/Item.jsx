/* eslint-disable react/no-children-prop */
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import ProductCard from "../ProductCard/ProductCard"



const Item = ({item}) => {
  
  return (

<Link to={"/item/" + item.id} className="text-decoration-none">
<ProductCard>
   
            <img src={item.image} className="card-img-top" alt={item.title}/>
        
                <p className="card-tex">{item.title}</p>
                <p className="card-tex">$ {item.price}</p>
          
    </ProductCard>
    </Link>
    
  )
}



Item.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired,
}

export default Item