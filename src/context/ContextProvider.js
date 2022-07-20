import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();



  export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState(false);
    const [isloggedin, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState([]);
    const [tokenn, setTokenn] = useState("")
    const [cartonline, setCartOnline] = useState(false)
  
    
  
    return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <StateContext.Provider value={{ isloggedin, setIsLoggedIn, screenSize, setScreenSize, user, setUser, activeMenu, setActiveMenu, tokenn, setTokenn, cartonline, setCartOnline }}>
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);