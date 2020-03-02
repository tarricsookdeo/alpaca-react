import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form>
        <input
          className='w-1/4 mt-3 py-1 pl-3 ml-20 shadow-lg shadow-blue focus:outline-none'
          type='text'
          placeholder='Search stock ticker...'
        />
        <button
          className='bg-purple-500 hover:bg-purple-700 shadow-lg text-white ml-2 py-1 px-4 rounded'
          type='submit'
        >
          Search
        </button>
      </form>
    );
  }
}

export default Search;
