import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Portfolio from './views/Porfolio';
import Trade from './views/Trade';
import StockInfo from './views/StockInfo';
import Account from './views/Account';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
