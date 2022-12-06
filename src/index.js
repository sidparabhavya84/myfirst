import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
// import App from './componants/App';
import reportWebVitals from './reportWebVitals';  
// import Gallary from './componants/Gallary';
// import title from './componants/title';
// import Header from './componants/Header';
import Counter from './componants/Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const list = ["Home","About us","Blog","Services","Contact us","Help"];

root.render(
  <>
    <Counter />
    {/* <Header logo = 'images/logo.png' list = {list}/> */}
    
    
    
  </>
);


