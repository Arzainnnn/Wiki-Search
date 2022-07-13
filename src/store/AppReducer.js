export const initialState = {
    searchResults: null,
  };

  export const Reducer = (state, action) => {
    if (action.type === "SETSEARCHRESULTS") {
      return {
        ...state,
        searchResults: action.payload,
      };
    }
    return initialState;
  };