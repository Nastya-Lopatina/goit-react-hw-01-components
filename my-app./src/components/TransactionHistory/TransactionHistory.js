import React from 'react';
import style from './transaction.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => (
<table className={style.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item) => (

        <tr key = {item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
    ))}
  </tbody>
</table>
)

TransactionHistory.propTypes = {
    meanings: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}

export default TransactionHistory;