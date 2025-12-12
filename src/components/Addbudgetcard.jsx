import { Plus, X } from "lucide-react";
import { useState } from "react";

const Addbudgetmodal = ({ onClose, onAdd }) => {
  const [amount, setamount] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (amount && amount > 0) {
      onAdd(Number(amount));
      onClose();
    }
  };

  return (
    <>
      <div className="modal-backdrop"></div>
      <div id="budgetmodal">
        <div className="cardhead">
          <h1 className="zeromargin">Add Budget</h1>
          <button className="closebutton" onClick={onClose} type="button">
            <X />
          </button>
        </div>

        <form onSubmit={handlesubmit}>
          <h2 className="zeromargin">Amount*</h2>
          <input
            type="number"
            placeholder="Add Budget Amount"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            required
            className="input"
            min="1"
          />
          <button type="submit" id="modalbutton">
            <Plus size={15} /> Add Budget
          </button>
        </form>
      </div>
    </>
  );
};

const Addbudgetcard = ({ onAdd }) => {
  const [addbudget, setaddbudget] = useState(false);

  return (
    <>
      <button onClick={() => setaddbudget(true)} className="expandbudbutton">
        <Plus size={15} /> Add Budget
      </button>
      {addbudget && (
        <Addbudgetmodal onClose={() => setaddbudget(false)} onAdd={onAdd} />
      )}
    </>
  );
};

export default Addbudgetcard;
