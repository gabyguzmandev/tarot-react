import React, {useState} from 'react';
import Home from '../pages/Home';


const HomeLayout = (props) => {
  const [cardOrden, mixCards] = useState([0,1,2,3,4,5,6,7,7,8,9,10,12,13,14,15,16,17,18,19,20,21]);
  const handle = () => {
    mixCards([21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11,10,9,8,7,6,5,4,3,2,1,0]);
    console.log(cardOrden);
  }
  return( <Home cards={props.cards} title={props.title} handleClickMix={handle}></Home>);
};

export default HomeLayout;