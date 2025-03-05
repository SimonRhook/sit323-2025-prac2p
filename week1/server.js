// Importing express and express response libraries
const express = require("express");
const res = require("express/lib/response");
//create an express object
const app = express();
//Bind port
const port = 3040;

//Simple addition function
const addTwoNumber = (n1, n2) => n1 + n2;

//Redirect base URL to /addTwoNumbers
app.get("/", (req, res) => res.redirect("/addTwoNumbers?n1=19&n2=12"));

//Server reponse to add two numbers parsed in the URL and display json file in browser
app.get("/addTwoNumbers", (req, res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const result = addTwoNumber(n1, n2);
  res.json({ statuscode: 200, data: result });
});

//Outputs 19 + 12 to console
console.log(addTwoNumber(19, 12));

//Sets the express app to listen on our bound port and reports to console
app.listen(port, () => {
  console.log("Hello i'm listening to port: " + port);
});
