import React, { useState } from "react";
import { PencilLine, X } from 'lucide-react';
const Editexpensemodal = ({ onClose }) => {
  return(
    <>
    <div className="modal-backdrop"></div>
      <div id="modal">
        <div className="cardhead">
        <h1 className="zeromargin">Edit Expense</h1>
        <button className="closebutton" onClick={onClose}><X /></button>
        </div>
        <form>
        <h4 className="zeromargin">Expense Name*</h4>
        <input type="name" placeholder="Expense Name" required className="input"></input>
        <h4 className="zeromargin">Date*</h4>
        <input
                type="date"
                id="datepicker"
                name="datepicker"
                className="input"
              />
        <h4 className="zeromargin">Category*</h4>
         <select className="input">
                <option value="Food & Drinks">Food & Drinks</option>
                <option value=" Groceries"> Groceries</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
              </select>
        <h4 className="zeromargin">Amount*</h4>
        <input type="number" placeholder="Enter Amount" required className="input"></input>
        </form>
        <button id="modalbutton">+Edit Expense</button>
        
        {/* onClick={handleEditExpense} */}
      </div>
    </>
  );
};
const Editexpensecard = () => {
  const [editexpense, seteditexpense] = useState(false);
  return (
    <>
      <button onClick={() => seteditexpense(true)}  className="editexpense">  <PencilLine size={15}/> Edit </button>
      {editexpense && <Editexpensemodal onClose={()=>seteditexpense(false)} />}
    </>
  );
};

export default Editexpensecard;
