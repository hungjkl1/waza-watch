import { GET_ITEMS_FROM_LS, ADD_ITEM, REMOVE_ITEM, CHANGE_QUANTITY } from './constant';
const initialState = [];

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ITEMS_FROM_LS:
      return action.data ? action.data : [];

    case ADD_ITEM:
      return action.data;

    case REMOVE_ITEM:
      return action.data;

    case CHANGE_QUANTITY:
      return action.data

    default:
      return state;
  }
};

export default shoppingCartReducer;