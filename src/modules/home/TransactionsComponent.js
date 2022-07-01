import React, { useEffect, useState } from "react";
import "./TransactionsComponent.css";


const TransactionCell = (props) => {

  const color = props.data?.type === "EXPENSE" ? '4px solid #ff5c33' : '4px solid #66ff66';

  return (
    <div className="cell" style={{border:`${color}`}}>
      <span>{props.data?.desc}</span>
      <span>Rs {props.data?.amount}</span>
    </div>
  );
};


const TransactionsComponent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filtertrans, updatetrans] = useState(props.transactions);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updatetrans(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((data) =>
      data.desc.toLowerCase().includes(searchText.toLowerCase().trim()),
    );
    updatetrans(txn);
  };

  useEffect(() => {
    filterData(searchText);
  }, [props.transactions]);

  return (
    <div className="transactionscontainer">
      Transactions
      <input
        placeholder="Search"
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filtertrans?.map((data) => (
        <TransactionCell data={data} />
      ))}
    </div>
  );
};
export default TransactionsComponent;
