import React, { useState, useContext } from 'react';
import TransactionsContext from '../../context/TransactionsContext'

import styles from './add-transaction.styles.module.scss'

const AddTransaction = ({}) => {
  const { dispatchAdd } = useContext(TransactionsContext)

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    dispatchAdd(newTransaction)
    setText('');
    setAmount('')
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text' name="text">Transaction</label>
          <input
            type='text'
            placeholder='description . . . '
            onChange={(e)=>{setText(e.target.value)}}
            value={text}/>
        </div>

        <div className='form-control'>
          <label htmlFor='amount'>Amount </label>
          <input
            type='number'
            placeholder='(prefix with minus sign for expense)'
            onChange={(e)=>{setAmount(e.target.value)}}
            value={amount}
          />
        </div>

        <button
          className={styles.btn}
          type='submit'
          >Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
