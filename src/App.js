import React from 'react';

import JD from './assets/JeseíasDullce.mp4';

import './App.css';

export default () => {
  return (
    <div className='App'>
      <h1>Jeseías & Dullce</h1>
      <p>Nosso Video</p>
      <video src={JD} controls autoplay loop></video>
      <a href={JD} download>Baixar</a>
    </div>
  )
}
