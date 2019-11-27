const initalState = [];

const ratingReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_RATINGS':
      const ratings = action.ratings;
      return ratings

    default:
      return state
  }
};
export default ratingReducer;