import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Myhello from './components/Myhello';
import EventBasic from './components/EventBasic';
import StateBasic from './components/StateBasic';
import ForList from './components/ForList';
import book from './book';
import ForNest from './components/ForNest';
import ForFilter from './components/ForFilter';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='all'>
    <App />
    <Myhello myName="お馬鹿" />
    <EventBasic  type="time"/>
    <StateBasic init={0} />
    <ForList src={book}/>
    <ForNest src={book}/>
    <ForFilter src={book}/>
    
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
