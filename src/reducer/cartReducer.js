const json = localStorage.getItem('cartItems');
const cartItems = JSON.parse(json);

const cartItemsDefault = cartItems ? cartItems : [];

const cartReducer = (state = cartItemsDefault, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const json = localStorage.getItem('cartItems');
      const cartItems = JSON.parse(json);

      // Nếu giỏ hàng tồn tại
      if (cartItems) {
        const existItem = cartItems.findIndex(({ id }) => {
          return id == action.item.id
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
            {...action.item, quantity: action.quantity}
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
      const { id } = action.item;
      const json1 = localStorage.getItem('cartItems');
      const cartItems1 = JSON.parse(json1);

      const newCartItems = cartItems1.filter((item) => {
        return !(item.id === id);
      });
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
      return newCartItems

    case 'CLEAR_ALL_ITEM':
      localStorage.removeItem('cartItems');
      return state = [];

    default:
      return state
  }
}
export default cartReducer;
