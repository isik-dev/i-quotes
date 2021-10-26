import { quoteAPI } from "../apis/rapidapiQuotes";
import _ from "lodash";

// alternative version for our overfetching problem: an action creator inside action creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // below we are using await so that our function will not be doing anything until fetchQuotes is done.
  // the reason we are calling fetchQuotes from inside the dispatch function is because we want to make sure that fetchQuotes will dispatch its own data from inside

  await dispatch(fetchQuotes());
  // const userIds = _.uniq(_.map(getState().quotes, "owner.id"));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  //simplified version of above 2 lines
  _.chain(getState().quotes)
    .map("owner.id")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

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
  const response = await quoteAPI.get("/comment", { params: { limit: 50 } });

  dispatch({ type: "FETCH_QUOTES", payload: response.data.data });
};

// this action creator will fetchUser
// but there is one problem we need to fix: when we call this action creator, it will make one request for every id passed, even if that id is repeaded several times
// the resulting effect is that we make too many unnecessary network requests!!
// in order to fix that we will take use of _.memoize of lodash library! || we will create a new action creator fetchPostsAndUsers!

// intial version:
export const fetchUser = (id) => async (dispatch) => {
  const response = await quoteAPI.get(`/user/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// _.memoize version
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await quoteAPI.get(`/user/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
