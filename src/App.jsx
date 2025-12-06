import "./App.css";
import Totalbudnexp from "./components/Totalbudnexp";
import { useState } from "react";
import Menubar from "./components/Menubar";
import Expensedashboard from "./components/Expensedashboard";
import Deleteexpense from "./components/Deleteexpense";
import Editexpensecard from "./components/Editexpensecard";
import Addexpensecard from "./components/Addexpensecard";
import Addbudgetcard from "./components/Addbudgetcard";
function App() {
  const [Expenselist, setExpenselist] = useState([
    { Sr: 1, Name: "Pizza", Category: "Food", Amount: 1000 },
    { Sr: 2, Name: "Taxi", Category: "Travel", Amount: 30 },
  ]);

  const addNewExpense = (expenseData) => {
    const newExpense = {
      Sr: Exgit initpenselist.length + 1,
      Name: expenseData.name,
      Category: expenseData.category,
      Amount: Number(expenseData.amount),
    };
    setExpenselist([...Expenselist, newExpense]);
  };

  const deleteExpense = (indexToDelete) => {
    setExpenselist(Expenselist.filter((_, index) => index !== indexToDelete));
    console.log(indexToDelete, "dkgdiygd")
  };
   {JSON.stringify(Expenselist)}
   
   
  return (
    <>
      <div className="mainbody">
        

        <div>
          <nav id="navbar">Expense Tracker</nav>
          <hr />
          <h1>
            <b>Hello, Mateen Miyanoor</b>
          </h1>
        </div>
        <Totalbudnexp />
        <Menubar />
        <Addexpensecard onAdd={addNewExpense} />
        <Addbudgetcard />
        <Expensedashboard />

        <table className="expenseTable">
          <thead>
            <tr>
              <td>Sr</td>
              <td>Expense</td>
              <td>Amount</td>
              <td className="gapbetween">Edit/Delete</td>
            </tr>
          </thead>
          <tbody>
            {Expenselist.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Expense on {item.Name}</td>
                <td>{item.Amount}</td>
                <td className="gapbetween">
                  <Editexpensecard />
                  <Deleteexpense onDelete={() => deleteExpense(indexToDelete)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
