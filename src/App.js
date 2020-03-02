import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Search from './components/stock/Search';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Search />
      </div>
    );
  }
}

export default App;
