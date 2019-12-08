import { GET_USER_FROM_LOCAL_STORAGE, SET_USER, REMOVE_USER } from './constant';
const initalState = {}

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USER_FROM_LOCAL_STORAGE:
      return action.data;

    case SET_USER:
      return action.data;

    case REMOVE_USER:
      return {};

    default:
      return state
  };
};

export default userReducer;