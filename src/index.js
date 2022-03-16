import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import TransactionsProvider from './components/transactions-provider/TransactionsProvider.component'

import 'bootstrap/dist/css/bootstrap.min.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>, rootElement
);
