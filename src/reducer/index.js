import { combineReducers } from "redux";
import cartReducer from './cartReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  cartItems: cartReducer,  
  user: userReducer
});
export default reducer;