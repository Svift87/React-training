import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, addText} from './Redux/State'

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} addText={addText} />,
    document.getElementById('root')
  );  
}
