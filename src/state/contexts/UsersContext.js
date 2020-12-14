import React, { createContext, useState } from 'react';

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UsersContext.Provider
      value={{
        userRole,
        setUserRole,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
