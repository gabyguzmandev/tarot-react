import React from 'react';
import '../assets/styles/CardHide.css';

const Card = (props) => {
  const handleClick = () => {
    props.handleClick(props)
  }
  return (
    <div className={'card-tarot '+props.classNameEffect} onClick={handleClick}></div>
  );
};
export default Card;