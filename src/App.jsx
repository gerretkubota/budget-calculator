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
    console.log('expense', e.target.value);
    setExpense(e.target.value);
  };

  const handleAmount = e => {
    console.log('amount', e.target.value);
    setAmount(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>Expense Calculator</h1>
      <ExpenseForm
        expense={expense}
        amount={amount}
        handleExpense={handleExpense}
        handleAmount={handleAmount}
      />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
