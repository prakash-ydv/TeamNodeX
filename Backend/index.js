const express = require("express");
const { testController } = require("./controllers/test.controller");
const connectToDB = require("./models/db.connection");
const { createUser, loginUser } = require("./controllers/user.controller");
const cookieParser = require("cookie-parser");
const app = express();

// env
require("dotenv").config();
const DB_URL = process.env.DB_URL;
// connect to DB
connectToDB(DB_URL);

// middleware
app.use(express.json());
app.use(cookieParser());

app.get("/test", testController);

// user routes
app.post("/user/create", createUser);
app.post("/user/login", loginUser);

const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server Running at port http://localhost:${PORT}`);
});
