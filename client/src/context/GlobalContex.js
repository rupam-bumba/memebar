import React, { useState, createContext } from "react";

export const GrobalContex = createContext();

export const GlobalContexProvider = (props) => {
  const [GlobalContexValue, setGlobalContexValue] = useState({
    url: "http://localhost:5000",
    // url: "http://memebar.com",
    
  });
  return (
    <GrobalContex.Provider value={[GlobalContexValue, setGlobalContexValue]}>
      {props.children}
    </GrobalContex.Provider>
  );
};
