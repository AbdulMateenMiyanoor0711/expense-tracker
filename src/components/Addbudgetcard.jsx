import { Plus, X } from "lucide-react";
import { useState } from "react";

const Addbudgetmodal = ({ onClose }) => {
  return (
    <>
      <div className="modal-backdrop"></div>
      <div id="budgetmodal">
        <div className="cardhead">
          <h1 className="zeromargin">Add Budget</h1>
          <button className="closebutton" onClick={onClose}>
            <X />
          </button>
        </div>
        
        <h2 className="zeromargin">Amount</h2>
        <form >
          <input
            form="Amount"
            type="number"
            placeholder="Add Budget Amount"
            required
            className="input"
            x
          ></input>
        </form>
        <button id="modalbutton">
          {" "}
          <Plus size={15} /> Add Budget
        </button>
      </div>
    </>
  );
};
const Addbudgetcard = () => {
  const [addbudget, setaddbudget] = useState(false);
  return (
    <>
      <button onClick={() => setaddbudget(true)} className="expandbudbutton">
        <Plus size={15} /> Add Budget
      </button>
      {addbudget && <Addbudgetmodal onClose={() => setaddbudget(false)} />}
    </>
  );
};

export default Addbudgetcard;
