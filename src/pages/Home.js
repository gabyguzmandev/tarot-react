import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card';
import AnimatedCard from '../components/AnimatedCard';
import '../assets/styles/HomeStyles.css';

const Home = (props) => {
  let {title, cards, selectedCard, getSelectedCard, handleClickCard, pathImg} = props;

  const closeActionClick = (evt) => getSelectedCard(null);
  const getClassName = (index, cardsLength) => (index + 1 < cardsLength ? '' : '');

  return (
    <>
      <header>
        <h1 className="title title-app">{title}</h1>
      </header>
      <div className="actions-tarot">
        <button className="simple-button-tarot" type="text" onClick={props.handleClickMix}>Barajar</button>
      </div>
      <div className="wrapper-tarot">
        { cards.map((card, index) => <Card classNameEffect={getClassName(index, cards.length)} index={index} link={card.link} name={card.name} key={uuidv4()} handleClick={handleClickCard}></Card> ) }
      </div>
      {
        selectedCard
        ? <div className="wrapper-selected-tarot" onClick={closeActionClick}>
            <div className="selected-tarot">
              <AnimatedCard link={selectedCard.link} urlPath={pathImg}></AnimatedCard>
            </div>
          </div>
        : ''
      }
    </>
  );
};

export default Home;