import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'
import { currencyFormatter } from '../../utils/utils.js'


const BudgetCard = ({name, amount, max}) => {

  function getProgressBarVariant(amount, max){
    const ratio = amount / max;
    if (ratio < .5) return 'primary'
    if (ratio < .75) return 'warning'
    return 'danger'
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal  mb-3'>
            <div className='me2'>{name}</div>
            <div className='d-flex align-items-baseline'>
              {currencyFormatter.format(amount)}
              <span className='text-muted fs-6 ms-1'>
                / {currencyFormatter.format(max)}
              </span>
            </div>
        </Card.Title>
        <ProgressBar className='rounded-pill' variant={getProgressBarVariant(amount, max)} min={0} max={max} now={amount} />
       
      </Card.Body>
    </Card>
  )
}

export default BudgetCard
