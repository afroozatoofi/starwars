export const filmsReducer = (state = [], action) => {
    switch (action.type) {
      case "INIT":
        return [...action.payload];
  
      default:
        return state;
    }
  };
  