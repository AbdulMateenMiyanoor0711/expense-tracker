const db = require("./../db");
async function getexpenses() {
  try {
    let get = await db.query(`SELECT * FROM expense_tracker.user_expense;`);
    console.log("Successfull In Getting all Expense", get);
    return get[0];
  } catch (error) {
    throw error;
  }
}
async function addexpenses(body) {
  try {
    let userid = body.user_id;
    let name = body.expense_name;
    let date = body.expense_date;
    let category = body.expense_category;
    let amount = body.expense_amount;
    let add = await db.query(
      `INSERT INTO expense_tracker.user_expense 
(user_id, expense_name, expense_date, expense_category, expense_amount)
VALUES 
(${userid}, '${name}', '${date}', '${category}', ${amount});	`,
    );
    console.log("add", add);
  } catch (error) {
    throw error;
  }
}

async function editexpenses(body) {
  try {
    let id = body.id;
    let name = body.expense_name;
    let date = body.expense_date;
    let category = body.expense_category;
    let amount = body.expense_amount;
    let edit = await db.query(
      `update  expense_tracker.user_expense set expense_name= '${name}' ,expense_date='${date}' ,expense_category='${category}' ,expense_amount=${amount} where id=${id};`,
    );
    console.log("succesfull in editing expenses", edit);
  } catch (error) {
    throw error;
  }
}

async function deleteexpense(body) {
  try {
    let id = body.id;
    let deleteexpense = await db.query(
      `delete from expense_tracker.user_expense where id = ${id}`,
    );

    console.log("delete", deleteexpense);
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getexpenses: getexpenses,
  addexpenses: addexpenses,
  editexpenses: editexpenses,
  deleteexpense: deleteexpense,
};
