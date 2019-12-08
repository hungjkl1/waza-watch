import { getItemsFromLocalStorage, addItem, removeItem, changeQuantity } from './actions';
import { addItemSuccess } from '../../sweetAlert';

export const getItemsFromLS = () => {
  return (dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
      dispatch(getItemsFromLocalStorage(cart));
    } else {
      localStorage.setItem('cart', JSON.stringify([]))
    }
  }
};

export const addItemToCart = (item, quantity) => {
  return (dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    // Kiểm tả giỏ hàng tồn tại
    if (cart) {
      const existItem = cart.findIndex(({ _id }) => { return String(_id) === String(item._id) })
      // Nếu item đã tồn tại thì tăng quantity
      if (existItem !== -1) {
        cart[existItem].quantity = Number(cart[existItem].quantity) + Number(quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch(addItem(cart));
        addItemSuccess.fire();
      } else {
        const newCart = [...cart, { ...item, quantity }];
        localStorage.setItem('cart', JSON.stringify(newCart))
        dispatch(addItem(newCart));
        addItemSuccess.fire();
      }
    }
  }
};

export const removeItemFromCart = (item) => {
  return (dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const newCart = cart.filter(i => !(i._id === item._id));

    localStorage.setItem('cart', JSON.stringify(newCart))
    dispatch(removeItem(newCart));
  }
};

export const changeQuantityItem = (item, quantity) => {
  return (dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const existItem = cart.findIndex((i) => String(i._id) === String(item._id));
    cart[existItem].quantity = quantity;

    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(changeQuantity(cart))
  }
}