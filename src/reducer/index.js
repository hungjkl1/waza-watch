import { combineReducers } from "redux";
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import ratingsReducer from './ratingsReducer';

const reducer = combineReducers({
  cartItems: cartReducer,  
  user: userReducer,
  ratings: ratingsReducer
});
export default reducer;