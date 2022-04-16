import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//when you need to import all components, use the index way to import em all
import MainView from './views/mainView';
import Home from './views/home';
import About from './views/about';
import Nav from './components/nav';
import Resume from './views/resume';
import reportWebVitals from './reportWebVitals';
import "./style.css"

const rootElement = document.getElementById("root");
ReactDOM.render(
  //when needing to go into dev mode, change "/portfolio" to "/"
  <BrowserRouter basename="/portfolio">
    <Nav />
    <Routes>
      <Route path='/' element={<MainView/>}> 
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
