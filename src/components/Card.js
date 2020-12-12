import React from 'react';
import '../assets/styles/CardStyles.css'

const Card = (props) => {
  const handleClick = () => {
    console.log(props);
  }
  return (
    <div className="card-tarot" onClick={handleClick}>
    </div>
  );
};
export default Card;