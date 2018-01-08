import React from 'react';

const Onebit = ({image, description}) => {
  return (
    <div className = "onebit" >
      <img id="image" className = "image" src= {image} alt={description} />
      <p id="texts" className = "texts" >{description}</p>
    </div>
  );
};


export default Onebit;
