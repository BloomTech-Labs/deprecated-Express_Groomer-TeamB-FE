import React from 'react';
import CustomersProvider from './CustomersContext';
import GroomersProvider from './GroomersContext';

export const RootProvider = ({ children }) => {
  return (
    <GroomersProvider>
      <CustomersProvider>{children}</CustomersProvider>
    </GroomersProvider>
  );
};
