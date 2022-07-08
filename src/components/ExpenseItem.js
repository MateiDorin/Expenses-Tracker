import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const expenses = props.items.map((expense) => {
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
      </div>
    );
  });

  return (
    <div>
      {expenses}
    </div>
  );
};

export default ExpenseItem;
