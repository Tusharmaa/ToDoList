import React, { useState, createContext } from "react";

export const ContextProvider = createContext();

export const StateProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <ContextProvider.Provider value={[items, setItems]}>
      {props.children}
    </ContextProvider.Provider>
  );
};
