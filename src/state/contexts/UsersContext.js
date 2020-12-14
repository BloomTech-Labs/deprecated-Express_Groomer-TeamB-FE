import React, { createContext, useState, Context } from 'react';

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('');

  return (
    <UsersContext.Provider
      value={{
        userRole,
        setUserRole,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
