import PropTypes from 'prop-types';


function ProductCard({children }) {
    return (
    <div className='product-card'>
    
     <div> {children}</div>
     <button type="button" className="btn btn-dark">Detalle de producto</button>
    </div>
 )



}
ProductCard.propTypes = {
    
    children: PropTypes.node, 
  };


export default ProductCard;