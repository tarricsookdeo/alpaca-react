import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Portfolio from './views/Porfolio';
import Trade from './views/Trade';
import StockInfo from './views/StockInfo';
import Account from './views/Account';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
      </div>
    );
  }
}

export default App;
