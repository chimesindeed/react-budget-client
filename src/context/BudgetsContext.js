import React, { useContext } from 'react'

const BudgetsContext = React.createContext([])

export function useBudgets() {
  return useContext(BudgetsContext)
}

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized"

export default BudgetsContext
