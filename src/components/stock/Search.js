import React, { Component } from 'react';

class Search extends Component {
  state = {
    ticker: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.setState({ ticker: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='w-3/4 mt-3 py-1 pl-3 ml-20 shadow-lg shadow-blue focus:outline-none'
          type='text'
          name='ticker'
          placeholder='Search stock ticker...'
          value={this.state.ticker}
          onChange={this.onChange}
        />
        <button
          className='bg-purple-500 hover:bg-purple-700 shadow-lg text-white ml-2 py-1 px-5 rounded'
          type='submit'
        >
          Search
        </button>
      </form>
    );
  }
}

export default Search;
