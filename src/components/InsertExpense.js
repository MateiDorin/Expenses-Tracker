import React, { useState } from "react";
import "./InsertExpense.css";

const InsertExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isValid, setIsValid] = useState(false);

  const onChangeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const onChangeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const onChangeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const startEditHandler = () => {
    setIsValid(true);
  };

  const stopEditHandler = () => {
    setIsValid(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle === "" || enteredAmount === "" || enteredDate === "") {
      alert('Please fill in all the required fields.')
    } else {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
        id: Math.random().toString(),
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      setIsValid(false);
    }
  };

  return (
    <React.Fragment>
      {!isValid && (
        <div className="expense-button">
          <button onClick={startEditHandler} className="btn1">
            Add New Expense
          </button>
        </div>
      )}
      {isValid && (
        <form onSubmit={submitHandler} className="add-expense">
          <div className="container">
            <div className="block">
              <label>Title</label>
              <input className="expense-data"
                value={enteredTitle}
                type="text"
                maxLength={25}
                onChange={onChangeTitleHandler}
              />
            </div>
            <div className="block amount">
              <label>Amount</label>
              <input
                className="expense-data"
                value={enteredAmount}
                type="number"
                onChange={onChangeAmountHandler}
              />
            </div>
            <div className="block">
              <label>Date</label>
              <input
                className="expense-data"
                value={enteredDate}
                type="date"
                onChange={onChangeDateHandler}
              />
            </div>
          </div>
          <div className="btn">
            <button className="btn1" onClick={stopEditHandler} type="reset">
              Cancel
            </button>
            <button className="btn1" type="submit">Add expense</button>
          </div>
        </form>
      )}
    </React.Fragment>
  );
};

export default InsertExpense;
