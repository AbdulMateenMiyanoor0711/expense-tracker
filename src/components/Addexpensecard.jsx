import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const Expensemodal = ({ onClose }) => {
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
            <form>
              <h3 className="zeromargin">Expense Name*</h3>
              <input
                type="text"
                placeholder="Expense Name"
                required
                className="input"
              />

              <h3 className="zeromargin">Date*</h3>

              <input
                type="date"
                id="datepicker"
                name="datepicker"
                className="input"
              />

              <h3 className="zeromargin">Category*</h3>
              <select className="input">
                <option value="Food & Drinks">Food & Drinks</option>
                <option value=" Groceries"> Groceries</option>
                <option value="">Travel</option>
                <option value="Health">Health</option>
              </select>

              <h3 className="zeromargin">Amount*</h3>
              <input
                type="number"
                placeholder="Enter Amount"
                required
                className="input"
              />

              <button type="submit" id="modalbutton" onClick={e}>
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
const Addexpensecard = () => {
  const [expense, setexpense] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setexpense(true)} className="expandbudbutton">
          <Plus size={15} />
          Add Expense
        </button>
        {expense && <Expensemodal onClose={() => setexpense(false)} />}
      </div>
    </>
  );
};

export default Addexpensecard;
