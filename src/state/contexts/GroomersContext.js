import React, { createContext, useState } from 'react';

export const GroomersContext = createContext({});

const GroomersProvider = ({ children }) => {
  const [groomer, setGroomer] = useState();
  const [groomerInfo, setGroomerInfo] = useState({});

  const [allGroomers, setAllGroomers] = useState();
  const [filteredGroomers, setFilteredGroomers] = useState([]);
  const [groomerServices, setGroomerServices] = useState([]);

  return (
    <GroomersContext.Provider
      value={{
        groomer,
        setGroomer,
        groomerInfo,
        setGroomerInfo,
        allGroomers,
        setAllGroomers,
        filteredGroomers,
        setFilteredGroomers,
        groomerServices,
        setGroomerServices,
      }}
    >
      {children}
    </GroomersContext.Provider>
  );
};

export default GroomersProvider;
