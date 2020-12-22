import React, {useState} from 'react';
import Home from '../pages/Home';


const HomeLayout = (props) => {
  const [cardOrden, mixCards] = useState(props.cards);
  const [selectedCard, getSelectedCard] = useState(null);

  const mixedCards = () => {
    let copyCardsOrden = cardOrden;
    let newCardsOrden = [];
    let index = 0;
    do{
      let number = Math.floor(Math.random() * (copyCardsOrden.length) + 0);
      newCardsOrden[index++] = copyCardsOrden[number];
      if(number != copyCardsOrden.length) {
        copyCardsOrden[number] = copyCardsOrden[copyCardsOrden.length - 1];
      }
      copyCardsOrden.pop();
    }while(copyCardsOrden.length);
    mixCards(newCardsOrden);
  }

  const clickCardAction = (evt) => {
    getSelectedCard(evt);
  }

  return( <Home
            cards={cardOrden}
            title={props.title}
            handleClickMix={mixedCards}
            handleClickCard={clickCardAction}
            selectedCard = {selectedCard}
            pathImg = {props.absPath}
            getSelectedCard = {getSelectedCard}
          ></Home>);
};

export default HomeLayout;