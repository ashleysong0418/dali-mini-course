import React from 'react';

const DogPosting = (props) => {
  return (
    <div>
      <p>{props.name}, {props.breed}</p>
      <img src={ props.dogURL } alt='Image'/>
    </div>
  );
}

export default DogPosting;