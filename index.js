const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware para logar requisições
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log("Request Body:", req.body);
  next();
});

// Routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose
  .connect(
    "mongodb+srv://pedrohxn:MCSEhUxHPl1Swjsi@backenddb.yknx00y.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.error("connection failed", err);
  });
