import API from "../../core";
const service = new API();

export const getRatings = (productID) => {
  return (dispatch) => {
    service.post("rating/getRating", { id: productID })
      .then((result) => {
        console.log(result)
        dispatch({ type: 'GET_RATINGS', ratings: result })
      })
  }
}
