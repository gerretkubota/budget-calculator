import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item/Item.jsx';

const ExpenseList = ({ expenses }) => (
  <div className="expense-list-container">
    <ul>
      {expenses.map(item => (
        <Item key={item.id} itemInfo={item} />
      ))}
    </ul>
    {expenses.length && expenses.length > 0 ? (
      <button type="button">CLEAR EXPENSES</button>
    ) : null}
  </div>
);

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ExpenseList;
