import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from './components/header/Header.component'
import Balance from './components/balance/Balance.component'
import GainsAndExpenses from './components/gains-and-expenses/GainsAndExpenses.component'

import { Button, Stack } from 'react-bootstrap'
import styles from './app.styles.module.scss'

function App() {
  return (
    <Container className='my-4'>
      <Stack direction='vertical' gap='2' className='mb-4'>
        <div className={styles.topHorizontalContainer}>
          <div className={styles.headerBalanceContainer}>
            <Header />
            <Balance />
            <GainsAndExpenses />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button varient='primary' className={styles.button}>Add Expense</Button>
          <Button varient='outline-primary' className={styles.button}>Add Gain</Button>
        </div>
      </Stack>
    </Container>
  );
}

export default App;
