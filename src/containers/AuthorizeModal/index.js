import AuthorizeModal from './AuthorizeModal';
import { connect } from 'react-redux';
import { userLogin, userSignUp } from '../../providers/authorizeUser/thunk';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(userLogin(data)),
  signup: (data) => dispatch(userSignUp(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizeModal);
