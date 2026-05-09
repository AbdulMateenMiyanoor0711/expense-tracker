import { useState, useEffect } from "react";

const Totalbudnexp = () => {
  const [budget, setbudget] = useState([]);
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    getbudget();
    getexpense();
  }, []);
  const getbudget = async () => {
    try {
      let url = "http://localhost:8050/get-budget";
      let response = await fetch(url);
      let results = await response.json();
      console.log("Budget", results);
      let data = results.data;
      setbudget(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getexpense = async () => {
    try {
      let url = await "http://localhost:8050/get-expenses";
      let response = await fetch(url);
      let results = await response.json();
      console.log("Expense", results);
      let data = results.data;
      setExpense(data);
    } catch (error) {
      console.log(error);
    }
  };
  const totalexpense = expense.reduce(
    (sum, item) => sum + Number(item.expense_amount),
    0,
  );
  const totalbudget = budget.reduce(
    (sum, item) => sum + Number(item.budget_amount),
    0,
  );
  const remainingbudget = totalbudget - totalexpense;
  return (
    <>
      <div id="cardbox">
        <div className="cards">
          <div className="cardcategory">Total Budget</div>
          <div className="Amount"> ₹{totalbudget}</div>
        </div>

        <div className="cards">
          <div className="cardcategory">Total Expense</div>
          <div className="Amount">₹{totalexpense}</div>
        </div>

        <div className="cards">
          <div className="cardcategory">Remaining Budget</div>
          <div className="Amount">₹{remainingbudget}</div>
        </div>
      </div>
    </>
  );
};

export default Totalbudnexp;
