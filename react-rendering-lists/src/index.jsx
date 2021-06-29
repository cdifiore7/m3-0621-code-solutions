import React from 'react';
import ReactDOM from 'react-dom';
function ListPokemon(props) {
  const poke = props.pokemon;
  const pokelist = poke.map(x => <li key={x.number}>{x.name}</li>)
  return (
    <ul>{pokelist}</ul>
  );
}
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
ReactDOM.render(
  < ListPokemon pokemon={pokedex}/>,
  document.getElementById('root')
);
