import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';
const topics = [
  {
    id: 'html',
    title: 'Hypertext Markup Language',
    content: 'html'
  },
  {
    id: 'css',
    title: 'Cascading Style Sheets',
    content: 'css'
  },
  {
    id: 'js',
    title: 'JavaScript',
    content: 'js'
  }
];
ReactDOM.render(
  <Accordion topics={topics} />,
  document.querySelector('#root')
);
