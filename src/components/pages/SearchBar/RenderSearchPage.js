import React, { useState, useEffect } from 'react';
import { SearchResults } from '../SearchResults/SearchResultsPage';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import Axios from 'axios';
const { Search } = Input;

const Searching = () => {
  const [allGroomers, setAllGroomers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredGroomers, setFilteredGroomers] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/groomers')
      .then(res => {
        console.log('this is res.data', res.data);
        setAllGroomers(res.data);
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
      groomer.given_name.includes(searchValue)
    );
    setFilteredGroomers(result);

    console.log('This is at the end of onSearch', filteredGroomers);
  };

  return (
    <div>
      <Search
        value={searchValue}
        onSearch={onSearch}
        onChange={handleChange}
        enterButton
        style={{ width: 500 }}
        searchValue={searchValue}
      />
      <SearchResults filteredGroomers={filteredGroomers} />
    </div>
  );
};

export default Searching;