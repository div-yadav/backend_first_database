const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const route = require("./routes/direction");

app.use("/api/v1", route);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT, ()=>{
    console.log("app is running at port  {$PORT}");
})

app.get("/", (req,res)=>{
    res.send(`<h1><b>This is our homepage .<h1><b>`)
})