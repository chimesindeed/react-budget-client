import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import { Button, Stack } from 'react-bootstrap'
import Header from './components/header/Header.component'
import Balance from './components/balance/Balance.component'
import GainsAndExpenses from './components/gains-and-expenses/GainsAndExpenses.component'
import TransactionList from './components/transaction-list/TransactionList.component'
import AddTransaction from './components/add-transaction/AddTransaction.component'
import BudgetCard from './components/budget-card/BudgetCard.component'
import AddBudgetModal from './components/add-budget-modal/AddBudgetModal.component'
import { useBudgets } from './context/BudgetsContext'

import styles from './app.styles.module.scss'

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const { budgets } = useBudgets()
  return (
    <>
      <Container className='my-4'>
        <Stack direction='vertical' gap='2' className='mb-4'>
          <div className={styles.topHorizontalContainer}>

            <div className={styles.leftSideContainer}>
              <Header />
            </div>

            <div className={styles.middleContainer}>
              <Balance />
              <GainsAndExpenses />
              <TransactionList />
              <AddTransaction />
            </div>

            <div className={styles.rightSideContainer}>
              <Stack direction='horizontal' className='mb-4 mt-2'>
                <h3 className='me-auto'>Budgets</h3>
                <Button variant='primary' onClick={()=>{setShowAddBudgetModal(true)}}>Add Budget</Button>
              </Stack>
            <div className={styles.budgetGrid}>
            {
              budgets.map(budget => (
                <BudgetCard name={budget.name} amount={budget.amount} max={budget.max} gray/>

              ))
            }
            </div>
          </div>
          </div>
        </Stack>
      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={()=>{setShowAddBudgetModal(false)}} />
    </>

  );
}

export default App;
