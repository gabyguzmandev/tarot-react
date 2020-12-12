import React from 'react';
import ReactDOM from 'react-dom';
import HomeLayout from './Containers/HomeLayout';
import CardsLink from './assets/Cards';

const app = document.getElementById('root');
ReactDOM.render(<HomeLayout cards={CardsLink} title="Lectura de Tarot de A. E Waite Ryder" />, app); 
