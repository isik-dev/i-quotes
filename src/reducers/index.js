import { combineReducers } from "redux";

// combine reducers is a function that takes an object with the values of multiple other reducers and will pass that object into createStore as on reducer object
// at the initial stage we can create a dummy reducer while buildig a boiler plate, as follows: (so our app does not complain)
export default combineReducers({
  gottareplacethis: () => "replace me",
});
