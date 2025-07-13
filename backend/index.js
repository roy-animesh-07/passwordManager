const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/passwordManager").then(() => {
    console.log("database connected");
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const passRoutes = require("./routes/password");

app.use("/api/password/",passRoutes);

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
})