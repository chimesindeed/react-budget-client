import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import TransactionsProvider from './components/transactions-provider/TransactionsProvider.component'
import BudgetsProvider from './components/budgets-provider/BudgetsProvider.component'

import 'bootstrap/dist/css/bootstrap.min.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <BudgetsProvider>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </BudgetsProvider>, rootElement
);
