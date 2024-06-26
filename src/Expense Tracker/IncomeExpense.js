import React  from "react";
import "./Expense.css";

function IncomeExpense({Income,Expense}){ 

  return (
    <div>
      <div className="income-expense">
        <div className="income">
          <h3>Income</h3>
          <p>{Income}</p>
        </div>
        <div className="expense">
          <h3>Expense</h3>
          <p>{Expense}</p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpense;
