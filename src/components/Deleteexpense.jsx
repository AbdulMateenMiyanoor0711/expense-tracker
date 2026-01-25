import React, { useState } from "react";
import { CircleAlert, Trash2 } from "lucide-react";

const Deleteexpensemodal = ({ onClose, indexToDelete }) => {
  return (
    <>
      <div className="modal-backdrop"></div>
      <div id="deletemodal" className="zeromargin">
        <CircleAlert size={70} color="#e01515" />
        <h1 className="zeromargin">Are You Sure </h1>
        <p className="cardcategory zeromargin">
          You wont be able to revert this!
        </p>
        <div id="deletebuttonsection" className="zeromargin">
          <button className="cancelbutton" onClick={onClose}>
            Cancel
          </button>
          <button className="deletebutton" onClick={indexToDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

const Deleteexpense = ({ onDelete }) => {
  const [Delete, setDelete] = useState(false);
  return (
    <>
      <button onClick={() => setDelete(true)} className="deleteexpense">
        <Trash2 size={15} />
        Delete
      </button>
      {Delete && (
        <Deleteexpensemodal
          onClose={() => setDelete(false)}
          indexToDelete={() => {
            onDelete();
            setDelete(false);
          }}
        />
      )}
    </>
  );
};

export default Deleteexpense;
