import App from './App';
import { connect } from 'react-redux';
import { getUserFromLS } from '../../providers/authorizeUser/thunk';

const mapStateToProps = (state) => ({
  currentUser: state.user
});
const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(getUserFromLS()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);