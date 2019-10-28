import { combineReducers } from "redux";
import cartReducer from './cartReducer';

const reducer = combineReducers({
  cartItems: cartReducer  
});
export default reducer;