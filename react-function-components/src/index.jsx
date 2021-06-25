import React from 'react';
import ReactDOM from 'react-dom';
function Clickbutton () {
  return <button>click me!</button>
}
const element = <Clickbutton />
ReactDOM.render(
  element,
  document.getElementById('root')
);
