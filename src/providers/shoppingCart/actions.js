import { GET_ITEMS_FROM_LS, ADD_ITEM, REMOVE_ITEM, CHANGE_QUANTITY } from './constant';

export const getItemsFromLocalStorage = (data) => ({
  type: GET_ITEMS_FROM_LS,
  data
});

export const addItem = (data) => ({
  type: ADD_ITEM,
  data
});

export const removeItem = (data) => ({
  type: REMOVE_ITEM,
  data
});

export const changeQuantity = (data) => ({
  type: CHANGE_QUANTITY,
  data
});

export const removerAllItems = () => ({

});