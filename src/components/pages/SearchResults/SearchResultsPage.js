import React from 'react';

export const SearchResults = props => {
  console.log('this is props', props);
  return (
    <>
      <h1>Hello, {props.business_name}</h1>
    </>
  );
};
