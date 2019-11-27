const initalState = [];

const ratingReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_RATINGS':
      const ratings = action.ratings;
      return ratings

    case 'UPDTAE_RATINGS':
      const newRatings = action.ratings;
      return newRatings

    default:
      return state
  }
};
export default ratingReducer;