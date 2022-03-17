import React, { useState, useContext } from 'react';
import TransactionsContext from '../../context/TransactionsContext'

import styles from './add-transaction.styles.module.scss'

const AddTransaction = ({}) => {
  const { dispatchAdd } = useContext(TransactionsContext)

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

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
      <div className = {styles.title}>Add Transaction</div>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <input
            required
            type='text'
            placeholder='description . . . '
            onChange={(e)=>{setText(e.target.value)}}
            value={text}/>
        </div>

        <div className='form-control'>
          <input
            className={styles.numberInput}
            required
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
