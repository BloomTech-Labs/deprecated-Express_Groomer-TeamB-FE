import React, { createContext, useState } from 'react';

export const CustomersContext = createContext({});

const CustomersProvider = ({ children }) => {
  return (
    <CustomersContext.Provider value={{}}>{children}</CustomersContext.Provider>
  );
};

export default CustomersProvider;
