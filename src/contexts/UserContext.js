import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const defaultUser = JSON.parse(localStorage.getItem("@user") || null);

const initialState = {
  isAuthenticated: !!defaultUser,
  user: defaultUser,
};

const reducer = (state, { type, data }) => {
  switch (type) {
    case "SET_AUTH_USER":
      return {
        ...state,
        user: data.user,
        isAuthenticated: !!data.user,
      };

    default:
      break;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAuthUser = (user) => {
    dispatch({ type: "SET_AUTH_USER", data: { user } });
  };

  return (
    <UserContext.Provider value={{ ...state, setAuthUser }}>
      {children}
    </UserContext.Provider>
  );
};
