import {
  CupSoda,
  HeartPlus,
  LucideSearch,
  Plane,
  Salad,
  Utensils,
  Wallet,
} from "lucide-react";

const Menubar = () => {
  return (
    <>
      <div className="mainmenu">
        <div className="search">
          <span>
            <LucideSearch className="item" />
          </span>
          <input
            type="form"
            placeholder="search"
            className="searchbutton"
          ></input>
        </div>
        <button className="expandbudbutton">
          <Wallet size={15} />
          All Expenses
        </button>
        <button className="categorybuttons">
          <Utensils size={15} />
          <CupSoda size={15} /> Food & Drinks
        </button>
        <button className="categorybuttons">
          <Salad size={15} /> Groceries
        </button>
        <button className="categorybuttons">
          <Plane size={15} />
          Travel
        </button>
        <button className="categorybuttons">
          <HeartPlus size={15} />
          Health
        </button>
        

      </div>
    </>
  );
};

export default Menubar;
