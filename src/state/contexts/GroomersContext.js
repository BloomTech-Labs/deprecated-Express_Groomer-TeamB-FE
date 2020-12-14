import React, { createContext, useState } from 'react';

export const GroomersContext = createContext({});

const GroomersProvider = ({ children }) => {
  const [groomer, setGroomer] = useState();
  const [allGroomers, setAllGroomers] = useState();
  const [filteredGroomers, setFilteredGroomers] = useState([]);
  return (
    <GroomersContext.Provider
      value={{
        groomer,
        setGroomer,
        allGroomers,
        setAllGroomers,
        filteredGroomers,
        setFilteredGroomers,
      }}
    >
      {children}
    </GroomersContext.Provider>
  );
};

export default GroomersProvider;
