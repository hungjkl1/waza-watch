import ProductList from './ProductList';
import { connect } from 'react-redux';
import { addItemToCart } from '../../providers/shoppingCart/thunk';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item, quantity) => dispatch(addItemToCart(item, quantity))
})

export default connect(null, mapDispatchToProps)(ProductList);