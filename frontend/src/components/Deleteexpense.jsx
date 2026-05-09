import { CircleAlert, Trash2 } from "lucide-react";
import { useState } from "react";
const Deleteexpensemodal = ({ onClose, indexToDelete, onDelete }) => {
  const deletexpense = async () => {
    try {
      let url = "http://localhost:8050/delete-expense";
      let response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: indexToDelete,
        }),
      });
      let data = await response.json();
      console.log(data);
      onDelete();
    } catch (error) {
      console.log(error);
    }
  };

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
          <button className="deletebutton" onClick={deletexpense}>
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
      {Delete && <Deleteexpensemodal onClose={() => setDelete(false)} />}
    </>
  );
};

export default Deleteexpense;
