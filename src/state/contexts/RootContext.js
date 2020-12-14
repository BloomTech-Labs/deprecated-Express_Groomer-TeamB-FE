import React from 'react';
import CustomersProvider from './CustomersContext';
import GroomersProvider from './GroomersContext';
import UsersContext from './UsersContext';

export const RootProvider = ({ children }) => {
  return (
    <UsersContext>
      <GroomersProvider>
        <CustomersProvider>{children}</CustomersProvider>
      </GroomersProvider>
    </UsersContext>
  );
};
