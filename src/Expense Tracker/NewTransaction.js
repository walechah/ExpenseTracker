import React, { useState } from "react";

function NewTransaction({
  Balance,
  setBalance,
  Income,
  Expense,
  setIncome,
  setExpense,
  Transactions,
  setTransactions,
}) {
  const [current, setCurrent] = useState(0);
  const [currentText, setCurrentText] = useState("Enter the text");

  const handleTextClick = () => {
    setCurrentText("");
  };

  const addTransaction = () => {
    const cur = parseInt(current);
    setBalance(Balance + cur);
    if(cur == 0){
      alert("Enter something valid")
      return;
    }
    if (cur < 0) {
      setExpense(Expense + cur);
    } else {
      setIncome(Income + cur);
    }

    const newTransaction = {
      text: currentText,
      amt: cur,
    };

    setTransactions([...Transactions, newTransaction]);

    setCurrent(0);
    setCurrentText("Enter the text");
  };

  return (
    <div className="transaction">
      <h3>Add new Transaction</h3>
      <hr />
      <h3>Text</h3>
      <input
        type="text"
        value={currentText}
        onClick={handleTextClick}
        onChange={(e) => {
          setCurrentText(e.target.value);
        }}
      />
      <h3>Amount</h3>
      <h4>(Negative - for expense and positive + for income)</h4>
      <input
        type="number"
        value={current}
        placeholder={current}
        onChange={(e) => {
          setCurrent(e.target.value);
        }}
      />
      <button onClick={addTransaction}>Add Transaction</button>
    </div>
  );
}

export default NewTransaction;
