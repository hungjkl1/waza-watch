import { GET_USER_FROM_LOCAL_STORAGE, SET_USER, REMOVE_USER } from './constant';

export const getUserFromLocalStorage = (data) => ({
  type: GET_USER_FROM_LOCAL_STORAGE,
  data
});

export const setUser = (data) => ({
  type: SET_USER,
  data
});

export const removeUser = () => ({
  type: REMOVE_USER
});
