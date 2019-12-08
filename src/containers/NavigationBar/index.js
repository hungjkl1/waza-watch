import NavigationBar from './NavigationBar';
import { userLogout } from '../../providers/authorizeUser/thunk'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.user,
  cartItems: state.cartItems
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);