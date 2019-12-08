import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import cartReducer from './cartReducer';
import authorizeUser from '../providers/authorizeUser/reducer';
import ratingsReducer from './ratingsReducer';

const reducer = combineReducers({
  cartItems: cartReducer,
  user: authorizeUser,
  ratings: ratingsReducer,
  form: formReducer
});
export default reducer;