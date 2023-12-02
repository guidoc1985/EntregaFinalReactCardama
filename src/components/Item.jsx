/* eslint-disable react/no-children-prop */
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import ProductCard from "./ProductCard"

const Item = ({item}) => {
  return (

<Link to={"/item/" + item.id} className="text-decoration-none">
<ProductCard>
   
            <img src={item.image} className="card-img-top" alt={item.nombre}/>
        
                <p className="card-tex">{item.nombre}</p>
                <p className="card-tex">$ {item.precio}</p>
          
    </ProductCard>
    </Link>
    
  )
}

Item.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired
    }).isRequired,
}

export default Item