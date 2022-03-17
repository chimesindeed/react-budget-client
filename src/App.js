import React from 'react'
import Container from 'react-bootstrap/Container'
import { Button, Stack } from 'react-bootstrap'
import Header from './components/header/Header.component'
import Balance from './components/balance/Balance.component'
import GainsAndExpenses from './components/gains-and-expenses/GainsAndExpenses.component'
import TransactionList from './components/transaction-list/TransactionList.component'
import AddTransaction from './components/add-transaction/AddTransaction.component'

import styles from './app.styles.module.scss'

function App() {
  return (
    <Container className='my-4'>
      <Stack direction='vertical' gap='2' className='mb-4'>
        <div className={styles.topHorizontalContainer}>

          <div className={styles.leftSideContainer}>
            <Header />
          </div>
          <div className={styles.rightSideContainer}>
            <Balance />
            <GainsAndExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </Stack>
    </Container>
  );
}

export default App;
