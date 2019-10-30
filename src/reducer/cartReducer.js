const json = localStorage.getItem('cartItems');
const cartItems = JSON.parse(json);

const cartItemsDefault = cartItems ? cartItems : [];

const cartReducer = (state = cartItemsDefault, action) => {
  switch (action.type) {

    case 'ADD_ITEM':
      const json = localStorage.getItem('cartItems');
      const cartItems = JSON.parse(json);
      // if Cart already exist
      if (cartItems) {
        const newCartItems = [...cartItems, action.item];
        const json = JSON.stringify(newCartItems);
        localStorage.setItem('cartItems', json)
        // if cart not exist 
      } else {
        const newCartItems = [action.item];
        const json = JSON.stringify(newCartItems);
        localStorage.setItem('cartItems', json)
      }
      return [...state, action.item];

    case 'CLEAR_ITEM':
      localStorage.removeItem('cartItems');
      return state = [];

    default:
      return state
  }
}
export default cartReducer;
