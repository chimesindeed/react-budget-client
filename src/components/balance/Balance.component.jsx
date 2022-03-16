import React from 'react';

import styles from './balance.styles.module.scss'

const Balance = () => {
    const total = 500.00
    return (
      <div className = {styles.balanceContainer}>
        <h4 id={styles.balance}>Your Balance</h4>
        <h2 id={styles.total}>${total}</h2>
      </div>
    )
};

export default Balance;
