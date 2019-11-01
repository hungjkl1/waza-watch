const json = localStorage.getItem('cartItems');
const cartItems = JSON.parse(json);

const cartItemsDefault = cartItems ? cartItems : [];

const cartReducer = (state = cartItemsDefault, action) => {

  switch (action.type) {

    case 'ADD_ITEM':
      const cartItems = JSON.parse(localStorage.getItem('cartItems'));

      // Nếu giỏ hàng tồn tại
      if (cartItems) {
        const existItem = cartItems.findIndex(({ _id }) => {
          return _id == action.item._id
        })

        // Nếu item đã tồn tại thì tăng quantity
        if (existItem !== -1) {
          cartItems[existItem].quantity = Number(cartItems[existItem].quantity) + Number(action.quantity);

          const json = JSON.stringify(cartItems);
          localStorage.setItem('cartItems', json)

          return cartItems;

        } else {
          const newCartItems = [
            ...cartItems,
            { ...action.item, quantity: action.quantity }
          ];
          const json = JSON.stringify(newCartItems);
          localStorage.setItem('cartItems', json)
          return newCartItems;
        }

      } else {
        // Nếu giỏ hàng không tồn tại 
        const newCartItems = [
          { ...action.item, quantity: action.quantity }
        ];
        const json = JSON.stringify(newCartItems);
        localStorage.setItem('cartItems', json)
        return newCartItems;
      }

    case 'REMOVE_ITEM':
      const cartItems1 = JSON.parse(localStorage.getItem('cartItems'));

      const newCartItems = cartItems1.filter((item) => {
        return !(item._id === action.item._id);
      });
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
      return newCartItems

    case 'CHANGE_ITEM_QUANTITY':
      const cartItems2 = JSON.parse(localStorage.getItem('cartItems'));

      const existItem = cartItems2.findIndex((item) => {
        return item._id == action.item._id
      });
      cartItems2[existItem].quantity = action.quantity;
      
      localStorage.setItem('cartItems', JSON.stringify(cartItems2))
      return cartItems2

    case 'CLEAR_ALL_ITEM':
      localStorage.removeItem('cartItems');
      return state = [];

    default:
      return state
  }
}
export default cartReducer;
