import React, { useState } from 'react';

import ExpenseList from './components/ExpenseList/ExpenseList.jsx';
import ExpenseForm from './components/ExpenseForm/ExpenseForm.jsx';

const dummyData = [
  { id: 0, expense: 'Car payment', amount: 500 },
  { id: 1, expense: 'Rent payment', amount: 1500 },
  { id: 2, expense: 'Health Insurance', amount: 200 },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyData);
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');

  const handleExpense = e => {
    setExpense(e.target.value);
  };

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newExpense = { id: expenses.length, expense, amount };
    setExpenses([...expenses, newExpense]);
    setExpense('');
    setAmount('');
  };

  const handleClear = () => {
    setExpenses([]);
  };

  return (
    <div className="app-container">
      <h1>Expense Calculator</h1>
      <ExpenseForm
        expense={expense}
        amount={amount}
        handleExpense={handleExpense}
        handleAmount={handleAmount}
        handleSubmit={handleSubmit}
      />
      <ExpenseList expenses={expenses} handleClear={handleClear} />
    </div>
  );
};

export default App;
