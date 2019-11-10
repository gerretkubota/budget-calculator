import React from 'react';
import PropTypes from 'prop-types';

const ExpenseForm = ({
  expense,
  amount,
  handleExpense,
  handleAmount,
  handleSubmit,
}) => (
  <form onSubmit={e => handleSubmit(e)}>
    <div>
      <input
        type="text"
        value={expense}
        onChange={handleExpense}
        placeholder="e.g. Rent"
        required
      />
      <input
        type="text"
        value={amount}
        onChange={handleAmount}
        placeholder="e.g. 200"
        required
      />
    </div>
    <button type="submit">SUBMIT</button>
  </form>
);

ExpenseForm.propTypes = {
  expense: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  handleExpense: PropTypes.func.isRequired,
  handleAmount: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ExpenseForm;
