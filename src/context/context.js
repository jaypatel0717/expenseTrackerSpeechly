import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [trasacations, dispatch] = useReducer(contextReducer, initialState);

  //action creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (trasacation) => {
    dispatch({ type: "ADD_TRANSACTION", payload: trasacation });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        trasacations,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
