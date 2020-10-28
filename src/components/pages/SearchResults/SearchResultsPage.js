import React from 'react';

export const SearchResults = props => {
  console.log('this is props', props);
  return (
    <>
      <h1>{props.given_name}</h1>
    </>
  );
};
