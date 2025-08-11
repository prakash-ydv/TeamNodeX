const express = require("express");
const { testController } = require("./controllers/test.controller");
const app = express();

require("dotenv").config();

app.get("/test", testController);

const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT , ()=>{
    console.log(`Server Running at port http://localhost:${PORT}`)
});
