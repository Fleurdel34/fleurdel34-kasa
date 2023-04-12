import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './pages/App';
import Apropos from './pages/Apropos';
import Logements from './pages/Logements';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={ <App /> }></Route>
        <Route path='/apropos' element={ <Apropos /> }></Route>
        <Route path='/Logements/:id' element={ <Logements /> }></Route>
        <Route path='*' element={ <Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
