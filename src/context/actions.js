
export const deleteTransaction = (id) => {
  dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
  });
}

export const addTransaction = (transaction) => {
  dispatch({
    type: 'ADD_TRANSACTION',
    payload: transaction
  })
}
