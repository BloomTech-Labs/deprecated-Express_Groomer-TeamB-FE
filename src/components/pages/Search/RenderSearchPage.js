import React, { useState, useEffect, useContext } from 'react';
import { SearchResults } from '../SearchResults/SearchResultsCard';
import 'antd/dist/antd.css';
import './search.scss';
import { Input } from 'antd';
import { getGroomers } from '../../../api';
// context imports
import { GroomersContext } from '../../../state/contexts/GroomersContext';

const { Search } = Input;

const Searching = () => {
  const [searchValue, setSearchValue] = useState('');
  //context state
  const {
    allGroomers,
    setAllGroomers,
    filteredGroomers,
    setFilteredGroomers,
  } = useContext(GroomersContext);

  //API Call
  useEffect(() => {
    getGroomers(setAllGroomers);
  }, []);

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const onSearch = () => {
    const result = allGroomers.filter(groomer =>
      groomer.city.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredGroomers(result);
  };

  return (
    <div className="search-page-container">
      <div className="search-bar-container">
        <Search
          className="search-input"
          value={searchValue}
          onSearch={onSearch}
          onChange={handleChange}
          enterButton
          placeholder="Search by city"
          style={{ width: 500 }}
        />
      </div>
      <div className="card-container">
        {filteredGroomers.map((groomer, index) => {
          return <SearchResults key={index} groomer={groomer} />;
        })}
      </div>
    </div>
  );
};

export default Searching;
