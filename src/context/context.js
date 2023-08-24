import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component to wrap your app with
export const AppProvider = ({ children }) => {
  const [successPage, setSuccessPage] = useState(false); // Replace `initialState` with your actual initial state

  // Define any functions or data you want to make available through the context
  const toggleSuccessPage = () => {
    console.log(successPage);
    setSuccessPage((prevValue) => !prevValue);
  };

  const contextValue = {
    successPage,
    toggleSuccessPage,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
