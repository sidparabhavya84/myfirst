import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import ToDO from './componants/ToDo';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const list = ["Home","About us","Blog","Services","Contact us","Help"];

root.render(
  <>
    <ToDO />    
  </>
);


