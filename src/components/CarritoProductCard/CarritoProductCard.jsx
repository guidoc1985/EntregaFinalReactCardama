import PropTypes from 'prop-types';


function CarritoProductCard({children }) {
    return (
    <div className='carrito-product-card'>
    
     <div> {children}</div>
    
    </div>
 )



}
CarritoProductCard.propTypes = {
    
    children: PropTypes.node, 
  };


export default CarritoProductCard;