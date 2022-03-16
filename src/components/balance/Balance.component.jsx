import React, { useContext } from 'react';
import TransactionsContext from '../../context/TransactionsContext'

import styles from './balance.styles.module.scss'

const Balance = () => {
    const { transactions } = useContext(TransactionsContext);
    const amounts = transactions.map((transaction)=>{ return transaction.amount})

    const total = amounts.reduce(
      (acc, item) => { return acc += item}, 0
    ).toFixed(2);

    return (
      <div className ={styles.balanceContainer}>
        <div id={styles.balance}>Balance:</div>
          <div id={styles.total}>${total}</div>
        </div>
    )
};

export default Balance;
