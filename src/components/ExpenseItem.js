import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === props.newYear;
  });

  const expenses = filteredExpenses.map((expense) => {
    return (
      <div key={expense.id} className="expense-item">
        <div className="expense-item__date">
          <div>
            {expense.date.toLocaleString("en-US", { month: "long" })}
          </div>
          <div>
            {expense.date.toLocaleString("en-US", { day: "2-digit" })}
          </div>
          <div>{expense.date.getFullYear()}</div>
        </div>
        <div className="expense-item__title">{expense.title}</div>
        <div className="expense-item__amount">£{expense.amount}</div>
        <div><button>Delete</button></div>
      </div>
    );
  });

  return (
    <React.Fragment>
      {expenses}
    </React.Fragment>
  );
};

export default ExpenseItem;
