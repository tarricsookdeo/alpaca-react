import React, { Component } from 'react';

class Account extends Component {
  state = {
    account: []
  };

  componentDidMount() {
    this.getAccountInfo();
  }

  getAccountInfo = () => {
    fetch('https://paper-api.alpaca.markets/v2/account', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'APCA-API-KEY-ID': process.env.REACT_APP_APCA_API_KEY_ID,
        'APCA-API-SECRET-KEY': process.env.REACT_APP_APCA_API_SECRET_KEY
      }
    })
      .then(response => response.json())
      .then(account => {
        console.log('Success:', account);
        this.setState({ account: account });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <div>
        <h1 className='ml-20 mt-10 text-4xl font-bold'>
          Account Details: {this.state.account.account_number}
        </h1>

        <div className='ml-20 text-2xl'>
          <h1>Buying Power: $ {this.state.account.buying_power}</h1>
          <h1>Total Cash: $ {this.state.account.cash}</h1>
          <h1>Day Trade Count: {this.state.account.daytrade_count}</h1>
          <h1>Equity: $ {this.state.account.equity}</h1>
          <h1>Margin Maintinace: $ {this.state.account.maintenance_margin}</h1>
        </div>
      </div>
    );
  }
}

export default Account;
