const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { default: mongoose } = require('mongoose');

const app = express();
const db= 
mongoose.connect(db, {useMewUrlParser:true})
.then(()=>console.log("mongoose"))
.catch(err =>console.log(err))
//ejs
app.use(expressLayouts);
app.set("view engine", "ejs");

//routes
app.use("/", require('./routes/index'));
app.use("/users", require('./routes/users'));

//bodyparser


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server started on port ${PORT}`));