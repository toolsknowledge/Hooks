import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UseState from "./UseState";
import Comp1 from "./Comp1";
import ClassEx from "./ClassEx";
import UseEffect from "./UseEffect";
import UseEffect1 from "./UseEffect1";
import Demo1 from './useEffectEx/Demo1';
import Demo2 from "./useEffectEx/Demo2";
import UseRef from "./useRefHook/UseRef";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UseRef />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
