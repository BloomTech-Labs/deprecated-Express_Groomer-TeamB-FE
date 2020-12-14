import React from 'react';
import CustomersProvider from './CustomersContext';
import GroomersProvider from './GroomersContext';
import UsersContext from './UsersContext';
import APIContext from './APIContext';

export const RootProvider = ({ children }) => {
  return (
    <APIContext>
      <UsersContext>
        <GroomersProvider>
          <CustomersProvider>{children}</CustomersProvider>
        </GroomersProvider>
      </UsersContext>
    </APIContext>
  );
};
