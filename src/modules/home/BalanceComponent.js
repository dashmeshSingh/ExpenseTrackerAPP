import React, { useState } from "react";
import "./BalanceComponent.css";

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  // const addTransaction=()=>{}

  return (
    <div className="addTransactionContainer" isTranscationVis={props.isTranscationVis}>
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className="radioBox">
        <input
          className="inputRadioBox"
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          className="inputRadioBox"
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="Expense">Income</label>
      </div>

      <div className="addTransaction"
        onClick={() =>
          props.addTransaction({
            id: Date.now(),
            amount: Number(amount),
            desc,
            type,
          })
        }
      >
        Add Transaction
      </div>
    </div>
  );
};
const BalanceComponent = (props) => {
  const [isTranscationVis, toggleAddTrans] = useState(false);

  return (
    <div className="Balancecontainer">
      <div className="balanceBox">
        Balance: Rs {props.income - props.expense}
        <button className="addTransaction" onClick={() => toggleAddTrans(!isTranscationVis)}>
          {isTranscationVis ? "CANCEL" : "ADD"}
        </button>
      </div>
      {isTranscationVis && (
        <AddTransactionView
          isTranscationVis={isTranscationVis}
          addTransaction={(data) => {
            props.addTransaction(data);
            toggleAddTrans((isVisible) => !isVisible);
          }}
        />
      )}
      <div className="expenseContainer">
        <div className="expenseBox">
          Expense<span className="spanExpenseBox" style={{color:`#ff5c33`}}>Rs {props.expense}</span>
        </div>
        <div className="expenseBox" isIncome={true}>
          Income<span className="spanExpenseBox" style={{color:`#66ff66`}}>Rs {props.income}</span>
        </div>
      </div>
    </div>
  );
};
export default BalanceComponent;
