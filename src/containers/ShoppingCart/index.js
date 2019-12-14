import ShoppingCart from './ShoppingCart';
import { connect } from 'react-redux';
import { removeItemFromCart, changeQuantityItem, removeAllItemInCart } from '../../providers/shoppingCart/thunk';

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  remove: (item) => dispatch(removeItemFromCart(item)),
  removeAllItems: () => dispatch(removeAllItemInCart()),
  changeQuantity: (item, quantity) => dispatch(changeQuantityItem(item, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);