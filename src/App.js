import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import { Button, Stack } from 'react-bootstrap'
import Header from './components/header/Header.component'
import Balance from './components/balance/Balance.component'
import GainsAndExpenses from './components/gains-and-expenses/GainsAndExpenses.component'
import TransactionList from './components/transaction-list/TransactionList.component'
import AddTransaction from './components/add-transaction/AddTransaction.component'
import BudgetCard from './components/budget-card/BudgetCard.component'
import UncategorizedBudgetCard from './components/uncategorized-budget-card/UncategorizedBudgetCard.component'
import TotalBudgetCard from './components/total-budget-card/TotalBudgetCard.component'
import AddBudgetModal from './components/add-budget-modal/AddBudgetModal.component'
import AddExpenseModal from './components/add-expense-modal/AddExpenseModal.component'
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from './context/BudgetsContext'

import styles from './app.styles.module.scss'

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()

  function openAddExpenseModal(budgetId){
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }
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
                <Button variant='outline-primary' onClick={openAddExpenseModal}>Add Expense</Button>
              </Stack>
              <div className={styles.budgetGrid}>
                {
                  budgets.map(budget => {
                    const amount = getBudgetExpenses(budget.id).reduce(
                    (total, expense) => (total + expense.amount), 0)
                    return (
                      <>
                        <BudgetCard
                          key={budget.id}
                          name={budget.name}
                          amount={amount}
                          max={budget.max}
                          onAddExpenseClick={()=>{openAddExpenseModal(budget.id)}}/>

                        <UncategorizedBudgetCard />
                        <TotalBudgetCard />
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </Stack>
      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={()=>{setShowAddBudgetModal(false)}} />
      <AddExpenseModal
        show={showAddExpenseModal}
        handleClose={()=>{setShowAddExpenseModal(false)}}
        defaultBudgetId={addExpenseModalBudgetId} />
    </>
  )
}

export default App;
