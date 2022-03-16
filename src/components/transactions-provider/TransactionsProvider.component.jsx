import React, { useReducer } from 'react'

import TransactionsContext from '../../context/TransactionsContext'
import TransactionsReducer from '../../context/reducer'
import { deleteTransaction, addTransaction } from '../../context/actions'

const initialState = {
// id, amount, text
  transactions: [
    {id: 1, text: 'book',  amount:  -24.00},
    {id: 2, text: 'gift',  amount:   50.00},
    {id: 3, text: 'phone', amount: -109.00},
    {id: 4, text: 'bill',  amount: -200.00},
    {id: 5, text: 'check', amount:  600.00}
  ]
}

const TransactionsProvider = (props) => {
  const [state, dispatch] = useReducer(TransactionsReducer, initialState);

  const dispatchDeleteTransaction = () => {
    dispatch(deleteTransaction)
  }
  const dispatchAddTransaction = () => {
    dispatch(addTransaction)
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        dispatchDeleteTransaction,
        dispatchAddTransaction
      }}
    >
      {props.children}
    </TransactionsContext.Provider>
  )
}

export default TransactionsProvider
