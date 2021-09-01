import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const PokeArray = [
  {
    index: 1,
    name: 'Bulbasaur',
    source: './images/bulbasaur.jpg'
  },
  {
    index: 2,
    name: 'Mewtwo',
    source: './images/Mewtwo.png'
  },
  {
    index: 3,
    name: 'Squirtle',
    source: './images/squirtle.png'
  },
  {
    index: 4,
    name: 'Pikachu',
    source: './images/pikachu.png'
  }

];

ReactDOM.render(<Carousel items={PokeArray} />, document.getElementById('root'));
