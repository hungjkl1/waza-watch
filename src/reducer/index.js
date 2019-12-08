import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import cartReducer from '../providers/shoppingCart/reducer';
import authorizeUserReducer from '../providers/authorizeUser/reducer';
import ratingsReducer from './ratingsReducer';

const reducer = combineReducers({
  cartItems: cartReducer,
  user: authorizeUserReducer,
  ratings: ratingsReducer,
  form: formReducer
});
export default reducer;