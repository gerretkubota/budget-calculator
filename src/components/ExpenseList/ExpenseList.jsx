import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item/Item.jsx';

const ExpenseList = ({ expenses, handleClear }) => (
  <div className="expense-list-container">
    <ul>
      {expenses.map(item => (
        <Item key={item.id} itemInfo={item} />
      ))}
    </ul>
    {expenses.length && expenses.length > 0 ? (
      <button type="button" onClick={handleClear}>
        CLEAR EXPENSES
      </button>
    ) : null}
  </div>
);

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default ExpenseList;
