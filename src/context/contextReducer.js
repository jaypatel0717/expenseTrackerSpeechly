//Reducer => a function that takes in the old state, and an action =>  new state...

const contextReducer = (state, action) => {
  let transacations;

  switch (action.type) {
    case "DELETE_TRANSACTION":
      transacations = state.filter((t) => t.id !== action.payload);
      localStorage.setItem("transaction", JSON.stringify(transacations));
      return transacations;

    case "ADD_TRANSACTION":
      transacations = [action.payload, ...state];
      localStorage.setItem("transaction", JSON.stringify(transacations));
      return transacations;

    default:
      return state;
  }
};

export default contextReducer;
