import { useState, useEffect } from "react";
import Totalbudnexp from "../components/Totalbudnexp";
import Menubar from "../components/Menubar";
import Expensedashboard from "../components/Expensedashboard";
import Deleteexpense from "../components/Deleteexpense";
import Editexpensecard from "../components/Editexpensecard";
import Addexpensecard from "../components/Addexpensecard";
import Addbudgetcard from "../components/Addbudgetcard";

function Home() {
  const [expense, setExpense] = useState([]);
  const getexpense = async () => {
    try {
      let url = "http://localhost:8050/get-expenses";
      let response = await fetch(url);
      let results = await response.json();
      setExpense(results.data);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getexpense();
  }, []);

  return (
    <>
      <div className="mainbody">
        <div>
          <nav id="navbar">Expense Tracker</nav>
          <hr />
          <div>
            <h1>
              <b>Hello, Mateen Miyanoor</b>
            </h1>
          </div>
        </div>

        <Totalbudnexp />
        <Menubar>
          <Addbudgetcard fetchproject={() => console.log("Budget added!")} />
          <Addexpensecard onAdd={getexpense} />
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
            {expense.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>Expense on {item.expense_name}</td>

                  <td>{item.expense_amount}</td>
                  <td className="gapbetween">
                    <Editexpensecard />
                    <Deleteexpense id={item.id} onDelete={getexpense} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
