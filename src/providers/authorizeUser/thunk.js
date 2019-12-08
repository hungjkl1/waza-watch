import { getUserFromLocalStorage, setUser, removeUser } from './actions';
import API from '../../core';

const service = new API();

export const getUserFromLS = () => {
  return (dispatch) => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(currentUser);
    if (currentUser) {
      dispatch(getUserFromLocalStorage(currentUser));
    }
  }
};

export const userLogin = (data) => {
  return (dispatch) => {
    service.post('user/userlogin', data)
      .then((result) => {
        localStorage.setItem('user', JSON.stringify(result.data.result))
        dispatch(setUser(result.data.result));
      });
  }
};

export const userLogout = () => {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch(removeUser())
  }
};

export const userSignUp = (data) => {
  return (dispatch) => {
    service.post('user/adduser', { data: data })
      .then((result) => {
        localStorage.setItem('user', JSON.stringify(result.data))
        dispatch(setUser(result.data));
      })
  }
};