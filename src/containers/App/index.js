import App from './App';
import { connect } from 'react-redux';
import { getUserFromLS } from '../../providers/authorizeUser/thunk';
import { getItemsFromLS } from '../../providers/shoppingCart/thunk';

const mapStateToProps = (state) => ({
  currentUser: state.user,
  cartItems: state.cartItems
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(getUserFromLS()),
  getCart: () => dispatch(getItemsFromLS())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);