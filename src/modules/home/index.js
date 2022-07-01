import React, { useEffect, useState } from "react";
import BalanceComponent from "./BalanceComponent";
import TransactionsComponent from "./TransactionsComponent";
import "./index.css";

const HomeComponent = (props) => {
    const [transactions, updateTransaction] = useState([]);
    const [expense, updateExpense] = useState(0);
    const [income, updateIncome] = useState(0);

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;
        transactions.map((data) =>
            data.type === "EXPENSE"
                ? (exp = exp + data.amount)
                : (inc = inc + data.amount),
        );
        updateExpense(exp);
        updateIncome(inc);
    };
    useEffect(() => calculateBalance(), [transactions]);

    const addTransaction = (data) => {
        const transactionArray = [...transactions];
        transactionArray.push(data);
        updateTransaction(transactionArray);
    };
    return (
        
        
        <div className="indexcontainer">
            

            <BalanceComponent
                expense={expense}
                income={income}
                addTransaction={addTransaction}
            />
            {transactions?.length ? (
                <TransactionsComponent transactions={transactions} />
            ) : ( 
                //"" for showing nothing
                <TransactionsComponent transactions={transactions} />
            )}
        </div>
    );
};
export default HomeComponent;
