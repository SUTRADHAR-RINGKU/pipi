const express = require("express");
const todoRoutes = require("./routes/todo.routes");

const app = express();
app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Todo API is running 🚀");
});

module.exports = app;
