import {
  CupSoda,
  HeartPlus,
  LucideSearch,
  Plane,
  Salad,
  Utensils,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const Menubar = ({ children }) => {
  const [ActiveButton, setActiveButton] = useState("All");

  return (
    <>
      <div className="mainmenu">
        <div className="search">
          <LucideSearch className="item" size={20} />
          <input type="text" placeholder="Search" />
        </div>
        <button
          className={
            ActiveButton === "All" ? "expensebutton" : "categorybuttons"
          }
          onClick={() => setActiveButton("All")}
        >
          <Wallet size={15} />
          All Expenses
        </button>
        <button
          className={
            ActiveButton === "Food & Drinks"
              ? "expensebutton"
              : "categorybuttons"
          }
          onClick={() => setActiveButton("Food & Drinks")}
        >
          <Utensils size={15} />
          <CupSoda size={15} /> Food & Drinks
        </button>
        <button
          className={
            ActiveButton === "Groceries" ? "expensebutton" : "categorybuttons"
          }
          onClick={() => setActiveButton("Groceries")}
        >
          <Salad size={15} /> Groceries
        </button>
        <button
          className={
            ActiveButton === "Travel" ? "expensebutton" : "categorybuttons"
          }
          onClick={() => setActiveButton("Travel")}
        >
          <Plane size={15} />
          Travel
        </button>
        <button
          className={
            ActiveButton === "Health" ? "expensebutton" : "categorybuttons"
          }
          onClick={() => setActiveButton("Health")}
        >
          <HeartPlus size={15} />
          Health
        </button>
        <div className="button-container">{children}</div>
      </div>
    </>
  );
};

export default Menubar;
