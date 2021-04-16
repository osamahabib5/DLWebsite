import React , {useEffect}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/AvenirLTStd-Roman.otf';
import './fonts//AvenirLTStd-Book.otf';
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from "./Provider";
import HttpsRedirect from 'react-https-redirect';


ReactDOM.render(
  <Router>
    <Provider>
      {/* <HttpsRedirect> */}
        <App />
      {/* </HttpsRedirect> */}
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
