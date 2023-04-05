import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import arkaplan from './resimler/khas4.png';

import App from './App';
import Ana_sayfa from './Ana_sayfa';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="container" style={{backgroundImage: `url(${arkaplan})`, backgroundRepeat : "no-repeat", height: "100vh", backgroundSize: "cover"}} >
        
      <div class="row">
        <div class="col-3" id="sidebar" display='none'  >
          <Ana_sayfa/>
        </div>
        <div class="col-9"  id="sayfa">
          <App/>
        </div>
      </div>      
        
    </div>

      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
