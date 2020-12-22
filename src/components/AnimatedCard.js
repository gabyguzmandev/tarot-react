import React from 'react';
import '../assets/styles/CardStyles.css';

const AnimatedCard = (props) => {
  const {urlPath, link} = props;

  return (
    <div className="animated-card-tarot">
      <img src={`${urlPath + link}`}></img>
    </div>
  );
};
export default AnimatedCard;