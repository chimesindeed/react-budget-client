import React, { useReducer } from 'react'

import TransactionsContext from '../../context/TransactionsContext'
import TransactionsReducer from '../../context/reducer'
import { deleteTransaction, addTransaction } from '../../context/actions'

const initialState = {

  transactions: []
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
