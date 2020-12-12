import React, { createContext, useState, Context } from 'react';

export const GroomersContext = createContext({});

const GroomersProvider = ({ children }) => {
  return (
    <GroomersContext.Provider value={{}}>{children}</GroomersContext.Provider>
  );
};

export default GroomersProvider;
