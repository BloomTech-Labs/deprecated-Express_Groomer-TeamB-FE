import React, { createContext, useState } from 'react';

export const CustomersContext = createContext({});

const CustomersProvider = ({ children }) => {
  const [custInfo, setCustInfo] = useState({});
  const [updated, setUpdated] = useState(false);

  return (
    <CustomersContext.Provider
      value={{
        custInfo,
        setCustInfo,
        updated,
        setUpdated,
      }}
    >
      {children}
    </CustomersContext.Provider>
  );
};

export default CustomersProvider;
