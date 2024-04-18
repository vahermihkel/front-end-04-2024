import React from 'react'; //node_module
import ReactDOM from 'react-dom/client'; //node_module
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; // meie fail
import App from './App'; // meie fail
import { BrowserRouter } from "react-router-dom"; // node_module
// kui on impordis {} --> siis võtab tüki sellest moodulist
// kui ei ole, siis võtab terve selle mooduli

// 1. npm install react-router-dom
// 2. impordime <BrowserRouter> tagi react-router-dom'st
// 3. ümbritseme <App /> tagi BrowserRouteri tagiga
// 4. teeme App.js faili URLi ja HTMLi seoseid

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

