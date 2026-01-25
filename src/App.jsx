import "./App.css";
import Totalbudnexp from "./components/Totalbudnexp";
import { useState, useEffect } from "react";
import Menubar from "./components/Menubar";
import Expensedashboard from "./components/Expensedashboard";
import Deleteexpense from "./components/Deleteexpense";
import Editexpensecard from "./components/Editexpensecard";
import Addexpensecard from "./components/Addexpensecard";
import Addbudgetcard from "./components/Addbudgetcard";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [budget, setbudget] = useState(() => {
    const saved = localStorage.getItem("budget");
    return saved ? Number(saved) : 0;
  });
  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);
  const addBudget = (amount) => {
    setbudget(budget + amount);
  };

  const [Expenselist, setExpenselist] = useState(() => {
    const saved = localStorage.getItem("expense");
    return saved ? JSON.parse(saved) : [];
  });
  const totalexpenses = Expenselist.reduce((sum, exp) => sum + exp.Amount, 0);
  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(Expenselist));
  }, [Expenselist]);
  const addExpense = (expensedata) => {
    const NewExpense = {
      id: uuidv4(),
      ...expensedata,
    };
    setExpenselist([...Expenselist, NewExpense]);
  };
  const deleteExpense = (id) => {
    setExpenselist(Expenselist.filter((exp) => exp.id !== id));
  };

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
        <Totalbudnexp budget={budget} totalExpense={totalexpenses} />
        <Menubar>
          <Addbudgetcard onAdd={addBudget} />
          <Addexpensecard
            onAdd={addExpense}
            budget={budget}
            totalExpense={totalexpenses}
          />
        </Menubar>
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
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>Expense on {item.Name}</td>
                <td>{item.Amount}</td>
                <td className="gapbetween">
                  <Editexpensecard />
                  <Deleteexpense onDelete={() => deleteExpense(item.id)} />
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
