import React, { useState, useEffect } from 'react';
import { SearchResults } from '../SearchResults/SearchResultsPage';
import 'antd/dist/antd.css';
import './search.scss';
import { Input } from 'antd';
import Axios from 'axios';
const { Search } = Input;

const Searching = () => {
  const [allGroomers, setAllGroomers] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [filteredGroomers, setFilteredGroomers] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/groomers')
      .then(res => {
        console.log('this is res.data', res.data); // sending back an array of objects
        setAllGroomers(res.data);
        // console.log('this is in the useEffect', allGroomers);
      })
      .catch(err => {
        console.log('Error', err);
      });
  }, []);

  const handleChange = event => {
    setSearchValue(event.target.value);
    console.log('this is in handleChange', searchValue);
  };

  const onSearch = () => {
    const result = allGroomers.filter(groomer =>
      groomer.city.includes(searchValue)
    );
    setFilteredGroomers(result);

    console.log('This is at the end of onSearch', filteredGroomers);
  };

  return (
    <div className="search-page-container">
      <div clasName="search-bar-container">
        <Search
          value={searchValue}
          onSearch={onSearch}
          onChange={handleChange}
          enterButton
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
