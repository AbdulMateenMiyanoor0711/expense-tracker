const express = require("express");
const app = express();
const port = 8050;
const auth = require("./routes/auth.routes");
const budget = require("./routes/budget.routes");
const expense = require("./routes/expense.routes");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(expense);
app.use(budget);
app.use(auth);
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
