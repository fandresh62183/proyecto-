import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './Login/Login';
import { Register } from './Register/Register';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Login/>
   <Register/>
  </React.StrictMode>
);


