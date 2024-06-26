import React, { useState } from "react";
import "./Expense.css";
import IncomeExpense from "./IncomeExpense";
import Historyyy from "./Historyyy";
import NewTransaction from "./NewTransaction";

export default function Expense() {
  const [Income, setIncome] = useState(0);
  const [Expense, setExpense] = useState(0);
  const [Balance, setBalance] = useState(0);
  const [Transactions, setTransactions] = useState([]);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <h2>Your Balance</h2>
      <h3> ${Balance}</h3>
      <IncomeExpense Income={Income} Expense={Expense} />
      <Historyyy Transactions={Transactions} />
      <NewTransaction
        Balance={Balance}
        setBalance={setBalance}
        Income={Income}
        Expense={Expense}
        setIncome={setIncome}
        setExpense={setExpense}
        Transactions={Transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}