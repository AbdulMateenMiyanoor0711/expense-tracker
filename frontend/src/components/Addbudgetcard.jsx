import { Plus, X } from "lucide-react";
import { useState } from "react";

const Addbudgetmodal = ({ onClose, fetchproject }) => {
  const [amount, setamount] = useState("");

  const addbudget = async () => {
    try {
      let body = {
        amount: Number(amount),
        user_id: 1,
      };
      const response = await fetch("http://localhost:8050/add-budget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setamount("");
      fetchproject();

      onClose();
      location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (amount && Number(amount) > 0) {
      addbudget();
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

const Addbudgetcard = ({ fetchproject }) => {
  const [addbudget, setaddbudget] = useState(false);

  return (
    <>
      <button onClick={() => setaddbudget(true)} className="expensebutton">
        <Plus size={15} /> Add Budget
      </button>
      {addbudget && (
        <Addbudgetmodal
          onClose={() => setaddbudget(false)}
          fetchproject={fetchproject}
        />
      )}
    </>
  );
};

export default Addbudgetcard;
