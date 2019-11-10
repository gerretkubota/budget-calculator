import React, { useState } from 'react';

import ExpenseList from './components/ExpenseList/ExpenseList.jsx';
import ExpenseForm from './components/ExpenseForm/ExpenseForm.jsx';

// const dummyData = [
//   { id: 0, expense: 'Car payment', amount: 500 },
//   { id: 1, expense: 'Rent payment', amount: 1500 },
//   { id: 2, expense: 'Health Insurance', amount: 200 },
// ];

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleExpense = e => {
    setExpense(e.target.value);
  };

  const handleAmount = e => {
    setAmount(parseInt(e.target.value));
  };

  const calculateTotal = () => {
    const totalAmount = expenses.reduce(
      (sum, itemInfo) => (sum += itemInfo.amount),
      0
    );
    setTotal(totalAmount);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (expense !== '' && amount > 0) {
      const newExpense = { id: expenses.length, expense, amount };
      setExpenses([...expenses, newExpense]);
      setExpense('');
      setAmount(0);
    }
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
      <ExpenseList
        expenses={expenses}
        handleClear={handleClear}
        total={total}
      />
      <div>
        Total Expense: $
        {expenses.reduce((sum, itemInfo) => (sum += itemInfo.amount), 0)}
      </div>
    </div>
  );
};

export default App;
