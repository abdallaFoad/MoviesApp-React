import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "./reducers/Reducer";

const initialState = {
  watchList: window.localStorage.getItem("watchList")
    ? JSON.parse(window.localStorage.getItem("watchList"))
    : [],
  watched: window.localStorage.getItem("watched")
    ? JSON.parse(window.localStorage.getItem("watched"))
    : [],
};
export const ContextData = createContext(initialState);

export default function ContextCom({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.localStorage.setItem("watchList", JSON.stringify(state.watchList));
    window.localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  return (
    <ContextData.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        movDispatch: dispatch,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}

export const useMovieContent = () => {
  return useContext(ContextData);
};
