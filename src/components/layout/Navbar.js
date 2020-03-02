import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-blue-900 pt-2 pb-2'>
      <h1 className='text-white ml-20 text-2xl inline'>Alpaca Trading</h1>
      <a
        className='float-right text-white mt-1 mr-20 hover:text-purple-400'
        href=''
      >
        Account
      </a>
      <a
        className='float-right text-white mt-1 mr-10 hover:text-purple-400'
        href=''
      >
        Portfolio
      </a>
    </nav>
  );
};

export default Navbar;
