import React, { useContext, useEffect } from 'react';
import TransactionsContext from '../../context/TransactionsContext'

import styles from './transaction.styles.module.scss'

const Transaction = ({transaction}) => {
  const { dispatchDelete } = useContext(TransactionsContext)

  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <li
      key={transaction.id}
      className={ transaction.amount < 0 ? styles.minus : styles.plus }
    > {transaction.text}

      <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className={styles.deleteBtn} onClick={()=>{dispatchDelete(transaction.id)}}> Delete</button>
   </li>
  );
}

export default Transaction;
