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

  return (
    <div className="app-container">
      <h1>Expense Calculator</h1>
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
