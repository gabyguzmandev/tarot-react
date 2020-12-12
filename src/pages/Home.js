import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card';
import '../assets/styles/HomeStyles.css';

const Home = (props) => {
  let {title, cards} = props;
  return (
    <>
      <header>
        <h1 className="title title-app">{title}</h1>
      </header>
      <div className="actions-tarot">
        <button className="simple-button-tarot" type="text" onClick={props.handleClickMix}>Barajar</button>
      </div>
      <div className="wrapper-tarot">
        { cards.map(card => <Card link={card.link} name={card.name} key={uuidv4()}></Card> ) }
      </div>
    </>
  );
};

export default Home;