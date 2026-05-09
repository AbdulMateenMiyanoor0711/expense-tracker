const db = require("./../db");

async function getbudget() {
  try {
       let get = await db.query(
      `SELECT * FROM expense_tracker.user_budget;`,
    );
    console.log("Successfull In Getting all Budgets", get);
    return get[0];
  } catch (error) {
    throw error;
  }
}

async function addbudget(body) {
  try {
    let amount = body.amount;
    let user_id = body.user_id;
    let add = await db.query(
      `INSERT INTO user_budget (user_id, budget_amount) VALUES (${user_id}, ${amount});`,
    );
    console.log("Adding Amount Successful", add);
    return add;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addbudget: addbudget,
  getbudget: getbudget,
};
