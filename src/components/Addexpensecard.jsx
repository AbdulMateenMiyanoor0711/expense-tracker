import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const Expensemodal = ({ onClose, onAdd }) => {
  const [form, setform] = useState({
    name: "",
    date: "",
    category: "",
    amount: "",
  });
{}
  const handleInputChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    onClose();
  };

  return (
    <>
      <div className="modal-backdrop"></div>
      <div id="modal">
        <div className="cardhead">
          <h1 className="zeromargin">Add Expense</h1>
          <button className="closebutton" onClick={onClose} type="button">
            <X />
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <h3 className="zeromargin">Expense Name*</h3>
          <input type="text" name="name" placeholder="Expense Name" value={form.name} onChange={handleInputChange} required className="input"/>

          <h3 className="zeromargin">Date*</h3>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleInputChange}
            required
            className="input"
          />

          <h3 className="zeromargin">Category*</h3>
          <select 
            name="category"
            value={form.category}
            onChange={handleInputChange}
            required
            className="input"
          >
            <option value="Food & Drinks">Food & Drinks</option>
            <option value="Groceries">Groceries</option>
            <option value="Travel">Travel</option>
            <option value="Health">Health</option>
          </select>

          <h3 className="zeromargin">Amount*</h3>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            value={form.amount}
            onChange={handleInputChange}
            required
            className="input"
          />

          <button type="submit" id="modalbutton">
            <Plus size={15} />
            Add Expense
          </button>
        </form>
      </div>
    </>
  );
};

const Addexpensecard = ({ onAdd }) => {
  const [expense, setexpense] = useState(false);

  return (
    <div>
      <button onClick={() => setexpense(true)} className="expandbudbutton">
        <Plus size={15} />
        Add Expense
      </button>
      {expense && <Expensemodal onClose={() => setexpense(false)} onAdd={onAdd} />}
    </div>
  );
};

export default Addexpensecard;