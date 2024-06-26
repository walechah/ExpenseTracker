import React from "react";

function Historyyy({ Transactions }) {
  return (
    <div className="history">
      <h1> History</h1>
      <hr />
      {Transactions.map((transaction, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: transaction.amt > 0 ? "lightgreen" : "red" }}
        >
          <div className="text">{transaction.text}</div>
          <div className="amount">${transaction.amt}</div>
        </div>
      ))}
    </div>
  );
}

export default Historyyy;
