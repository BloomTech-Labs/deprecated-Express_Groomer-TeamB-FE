import React from 'react';
import CustomersProvider from './CustomersContext';
import GroomersProvider from './GroomersContext';
import UsersContext from './UsersContext';
import APIContext from './APIContext';
import FormContext from './FormContext';

export const RootProvider = ({ children }) => {
  return (
    <FormContext>
      <UsersContext>
        <GroomersProvider>
          <CustomersProvider>
            <APIContext>{children}</APIContext>
          </CustomersProvider>
        </GroomersProvider>
      </UsersContext>
    </FormContext>
  );
};
