import React, { useState } from "react";
import "./App.css";
import InsertExpense from "./components/InsertExpense";
import ExpenseItem from "./components/ExpenseItem";
import SignIn from "./components/SignIn";
import Filter from "./components/Filter";
import Wrapper from "./components/Helpers/Wrapper";


const DUMMY_EXPENSES = [];

async function fetchExpenses() {
  const response = await fetch(
    "https://expenses-tracker-8297c-default-rtdb.europe-west1.firebasedatabase.app/expenses.json"
  );
  const expenses1 = await response.json();
  Object.keys(expenses1).forEach((key) => {
    return DUMMY_EXPENSES.unshift({
      id: expenses1[key].id,
      title: expenses1[key].title,
      amount: expenses1[key].amount,
      date: new Date(expenses1[key].date.toLocaleString()),
    });
  });
}

fetchExpenses();


const App = () => {
  const [validUser, setValidUser] = useState(false);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [year, setYear] = useState("2022");

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
    setYear(event);
  };

  return (
    <Wrapper>
      {!validUser && (
        <div>
          <SignIn start={startProgram} />
        </div>
      )}
      {validUser && (
        <div>
          <div className="sign-out">
            <button onClick={stopProgram} className="out">
              Sign Out
            </button>
          </div>
          <p className="app-name">Expenses Tracker</p>
          <InsertExpense onSaveExpenseData={newExpense} />
          <Filter onSelectedYear={selectedYear} />
          <ExpenseItem items={expenses} newYear={year} />
        </div>
      )}
    </Wrapper>
  );
};

export default App;
