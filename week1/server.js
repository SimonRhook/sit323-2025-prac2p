/* 
Simple Express server that will add two numbers based on URL input. Base URL redirects to calculator with default functions

To Run:
Step 1: in console, run node server.js
Step 2: in broswer, navigate to http://localhost:3000
Step 3(Optional): For different number calculations, change the numbers in the URL after n1 and n2
*/

// Importing express and express response libraries
const express = require("express");
const res = require("express/lib/response");
//create an express object
const app = express();
//Bind port
const port = 3000;

//Simple addition function
const addTwoNumber = (n1, n2) => n1 + n2;

//Redirect base URL to /addTwoNumbers
app.get("/", (req, res) => res.redirect("/addTwoNumbers?n1=19&n2=12"));

//Server reponse to add two numbers parsed in the URL and display json file in browser
app.get("/addTwoNumbers", (req, res) => {
  //Get numbers from URL and perform calculation
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const result = addTwoNumber(n1, n2);

  //Set JSON data
  const data = {
    statuscode: 200,
    "Number 1": n1,
    "Number 2": n2,
    data: result,
  };

  //Send response with JSON and message string for different calculations
  res.send(
    JSON.stringify(data, null, 2) +
      "\nChange the numbers in the URL for a different calculation."
  );
});

//Outputs 19 + 12 to console
console.log(addTwoNumber(19, 12));

//Sets the express app to listen on our bound port and reports to console
app.listen(port, () => {
  console.log("Hello i'm listening to port: " + port);
});
