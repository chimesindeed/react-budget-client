import React, { useContext } from 'react';
import TransactionsContext from '../../context/TransactionsContext'

import styles from './gains-and-expenses.styles.module.scss'

const GainsAndExpenses = () => {
  const { transactions } = useContext(TransactionsContext)
  const amounts = transactions.map((transaction)=>{ return transaction.amount})

  const income = amounts
    .filter(amount => amount > 0)
    .reduce(
      (acc, item) => {return acc += item}, 0
    )
    .toFixed(2)

  const expense = amounts
    .filter(amount => amount < 0)
    .reduce((acc, item)=> (acc += item), 0) * -1
    .toFixed(2)

  return (
    <div className={styles.gainsExpenseContainer}>
      <div>
        <div className={styles.title}>Income</div>
        <p id='money-plus' className={`${styles.money} ${styles.plus}`}>{income}</p>
      </div>
      <div>
        <div className={styles.title}>Expense</div>
        <p id='money-minus' className={`${styles.money} ${styles.minus}`}>{expense}</p>
      </div>
    </div>
  );
}

export default GainsAndExpenses;
