export const quoteReducers = (state = [], action) => {
  switch (action.type) {
    case "FETCH_QUOTES":
      return action.payload;
    default:
      return state;
  }
};
