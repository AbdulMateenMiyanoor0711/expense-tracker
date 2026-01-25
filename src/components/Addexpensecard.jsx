import React, { useState } from "react";
import { Plus, X } from "lucide-react";
const Expensemodal = ({ onClose, onAdd, budget, totalExpense }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Date: "",
    Category: "Food & Drinks",
    Amount: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const remaining = budget - totalExpense;
    const expenseData = {
      Name: formData.Name,
      Date: formData.Date,
      Category: formData.Category,
      Amount: Number(formData.Amount),
    };
    if (expenseData.Amount > remaining) {
      alert("insufficient budget");
      return;
    }
    onAdd(expenseData);

    onClose();
  };

  return (
    <>
      <div>
        <>
          <div className="modal-backdrop"></div>
          <div id="modal">
            <div className="cardhead">
              <h1 className="zeromargin">Add Expense</h1>
              <button className="closebutton" onClick={onClose}>
                <X />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <h3 className="zeromargin">Expense Name*</h3>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Expense Name"
                required
                className="input"
              />
              <h3 className="zeromargin">Date*</h3>
              <input
                type="date"
                id="datepicker"
                name="Date"
                value={formData.Date}
                onChange={handleChange}
                className="input"
              />
              <h3 className="zeromargin">Category*</h3>
              <select
                className="input"
                name="Category"
                value={formData.Category}
                onChange={handleChange}
              >
                <option value="Food & Drinks">Food & Drinks</option>
                <option value="Groceries">Groceries</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
              </select>
              <h3 className="zeromargin">Amount*</h3>
              <input
                type="number"
                name="Amount"
                value={formData.Amount}
                onChange={handleChange}
                placeholder="Enter Amount"
                required
                className="input"
                min="1"
              />
              <button type="submit" id="modalbutton">
                <Plus size={15} />
                Add Expense
              </button>
            </form>
          </div>
        </>
      </div>
    </>
  );
};
const Addexpensecard = ({ onAdd, budget, totalExpense }) => {
  const [expense, setexpense] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setexpense(true)} className="expensebutton">
          <Plus size={15} />
          Add Expense
        </button>
        {expense && (
          <Expensemodal
            onClose={() => setexpense(false)}
            onAdd={onAdd}
            budget={budget}
            totalExpense={totalExpense}
          />
        )}
      </div>
    </>
  );
};
export default Addexpensecard;
