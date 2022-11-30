import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './componants/App';
import reportWebVitals from './reportWebVitals';  
import Gallary from './componants/Gallary';
// import title from './componants/title';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    
    <Gallary />
    {/* <title /> */}
    
  </React.StrictMode>
);


reportWebVitals();
