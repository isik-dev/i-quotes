import { quoteAPI } from "../apis/rapidapiQuotes";
// an action creator = a simple function that will return an object with type and payload(optional)

// when making request from within our action creators with the help of async await, we will have a problem:
// and that problem is, our action creators do not return a plain object but instead they return promise which in nature they should

// export const fetchQuotes = async () => {
//   const response = await quoteAPI.get("/");
//   console.log(response);
//   return {
//     type: "FETCH_QUOTES",
//     payload: response,
//   };
// };

// in order to solve the above mentioned problem, we are going to be using redux thunk!!! the outer function returns a function the inner function can return anything

export const fetchQuotes = () => async (dispatch) => {
  const response = await quoteAPI.get("/");

  dispatch({ type: "FETCH_QUOTES", payload: response });
};
