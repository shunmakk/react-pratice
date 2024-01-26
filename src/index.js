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
import SelectStyle from './components/SelectStyle';
import StylePanel from './components/StylePanel';
import TitlePanel from './components/TitlePanel';
import ListTempalte from './components/ListTempalte';
import StateParent from './components/StateParent';





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
    <SelectStyle mode="dark"/>
    <StylePanel>
      <p>メンバー募集中！</p>
      <p>ようこそReact App 開発プロジェクトへ</p>
      <Myhello myName="お馬鹿" />
    </StylePanel>
    <TitlePanel> 
    <p key='title'>新卒メンバー募集中！</p>
    <p key='body'>初任給400万~  年間休日125日以上</p>
    </TitlePanel>
  
    <ListTempalte src={book}>
      {elem => (<>
        <dt>
       <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`} >
      {elem.title}({elem.price})
      </a>
      </dt>
       <dd>{elem.summary}</dd>
      </>)}

    </ListTempalte>

    <StateParent />
    
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
