import React, {useContext} from 'react';
import TransactionsContext from '../../context/TransactionsContext'
import Transaction from '../transaction/Transaction.component'

import styles from './transaction-list.styles.module.scss'

const TransactionList = ({}) => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <h3 id={styles.transactionsTitle}>Transactions</h3>
      <ul className={styles.transactionsContainer}>
        {
          transactions.map(
            (transaction)=> {
              return (
                <Transaction key={transaction.id} transaction={transaction} />
              )
          })
        }
      </ul>
    </>
  );
}

export default TransactionList;
