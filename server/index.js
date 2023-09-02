const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, ( req, response ) => {
        
          if (response) {
            res.json("Success");
          }
          else{
            res.json("wrong password");
            // alert("wrong password entered")
          }
        
      });
    } else {
      res.json("no record found");
      
    }
  });
});



app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10)
    .then(hash => {
      EmployeeModel.create({ name, email, password:hash })
        .then(employees => res.json(employees))
        .catch(err => res.json(err));  
    })
    .catch(err => console.log(err.message));
});



app.listen(3001, () => {
  console.log("server is running");
});
