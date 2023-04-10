import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Logements from './pages/Logements';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Router>
      <Header />
      <switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/apropos'>
          <Apropos />
        </Route>
        <Route path='/logements/:id'>
          <Logements />
        </Route>
        <Route>
          <Error />
        </Route>
      </switch>
      <Footer />

    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
