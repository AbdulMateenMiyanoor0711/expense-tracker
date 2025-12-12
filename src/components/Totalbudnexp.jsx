import React from "react";

const Totalbudnexp = ({ budget, totalExpense }) => {
  const remaining = budget - totalExpense;
  return (
    <>
      <div id="cardbox">
        <div className="cards">
          <div className="cardcategory">Total Budget</div>
          <div className="Amount">₹{budget}</div>
        </div>

        <div className="cards">
          <div className="cardcategory">Total Expense</div>
          <div className="Amount">₹{totalExpense}</div>
        </div>

        <div className="cards">
          <div className="cardcategory">Remaining Budget</div>
          <div className="Amount">₹{remaining}</div>
        </div>
      </div>
    </>
  );
};

export default Totalbudnexp;
