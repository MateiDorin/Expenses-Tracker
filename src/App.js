import React, { useState } from "react";
import "./App.css";
import InsertExpense from "./components/InsertExpense";
import ExpenseItem from "./components/ExpenseItem";
import SignIn from "./components/SignIn";
import Filter from "./components/Filter";

const DUMMY_EXPENSES = [
  {
    id: "a1",
    title: "Car Insurance",
    amount: 232.15,
    date: new Date(2021, 10, 22),
  },
  {
    id: "a2",
    title: "Iphone",
    amount: 1250,
    date: new Date(2021, 11, 25),
  },
  {
    id: "a3",
    title: "Book",
    amount: 15.99,
    date: new Date(2021, 0, 15),
  },
  {
    id: "a4",
    title: "Laptop Acer",
    amount: 850,
    date: new Date(2022, 5, 15),
  },
];

const App = () => {
  const [validUser, setValidUser] = useState(false);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [year, setYear] = useState('2022');

  const newExpense = (newData) => {
    setExpenses((prevExpenses) => {
      return [newData, ...prevExpenses];
    });
  };

  const startProgram = () => {
    setValidUser(true);
  };

  const stopProgram = () => {
    setValidUser(false);
  };

  const selectedYear = (event) => {
    setYear(event)
  }



  return (
    <div>
      <div>
        {!validUser && (
          <div>
            <SignIn start={startProgram}/>
          </div>
        )}
      </div>
      {validUser && (
        <div>
          <div className="sign-out">
            <button onClick={stopProgram} className="out">Sign Out</button>
          </div>
          <p className="app-name">Expenses Tracker</p>
          <InsertExpense onSaveExpenseData={newExpense} />
          <Filter onSelectedYear={selectedYear}/>
          <ExpenseItem items={expenses} newYear = {year} />
        </div>
      )}
    </div>
  );
};

export default App;
