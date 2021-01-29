import React from 'react';

import './petcard.css';

const PetCard = () => {
  return (
    <div className="petCard">
      <h1>Pet Name {}</h1>
      <div>Breed: {}</div>
      <div>Gender: {}</div>
      <div>Color: {}</div>
      <div>Temperament: {}</div>
      <div>Spayed/Neutered: {}</div>
      <div>Vaccinated: {}</div>
      <div>Special Requests: {}</div>
    </div>
  );
};

export default PetCard;
