import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-blue-900 pt-2 pb-2'>
      <h1 className='text-white ml-20 text-2xl inline'>Alpaca Trading</h1>
      <Link to='/account'>
        <button className='float-right text-white mt-1 mr-20 hover:text-purple-400'>
          Account
        </button>
      </Link>
      <Link to='/trade'>
        <button className='float-right text-white mt-1 mr-10 hover:text-purple-400'>
          Trade
        </button>
      </Link>
      <Link to='/'>
        <button className='float-right text-white mt-1 mr-10 hover:text-purple-400'>
          Portfolio
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
